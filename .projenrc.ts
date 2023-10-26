import { awscdk } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { TrailingComma } from 'projen/lib/javascript';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Antonio Márquez Pérez',
  authorAddress: 'antonio.marquez@jumptothecloud.tech',
  cdkVersion: '2.91.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@jttc/aws-codestarconnection',
  projenrcTs: true,
  constructsVersion: '10.3.0',
  repositoryUrl: 'https://github.com/JumpToTheCloud/aws-codestarconnection',
  prettier: true,
  prettierOptions: {
    settings: {
      trailingComma: TrailingComma.ES5,
      singleQuote: true,
      bracketSpacing: true,
      semi: true,
    },
  },
  jestOptions: {
    jestConfig: {
      verbose: true,
    },
  },
  github: true,
  deps: [] /* Runtime dependencies of this module. */,
  peerDeps: [] /* Peer dependencies of this module. */,
  description:
    'AWS CDK L2 construct for aws code star connection' /* The description is just a string that helps people understand the purpose of the package. */,
  devDeps: [
    'commitizen',
    'cz-customizable',
  ] /* Build dependencies for this module. */,
  packageName: '@jttc/aws-codestarconnection' /* The "name" in package.json. */,
});

project.addScripts({
  commit: './node_modules/cz-customizable/standalone.js',
});

project.addGitIgnore('site');

project.prettier?.addIgnorePattern('*.md');

project.addTask('docs:build', {
  exec: 'mkdocs build',
});

project.addTask('docs:serve', {
  exec: 'mkdocs serve -a localhost:8099',
});

const deployDocs = project.github?.addWorkflow('deploy-docs');
deployDocs?.on({
  workflowDispatch: {},
  workflowRun: {
    workflows: ['release'],
    types: ['completed'],
  },
  workflowCall: {
    inputs: {
      version: {
        required: true,
        type: 'string',
        description: 'Version to build and publish docs',
      },
      alias: {
        required: true,
        type: 'string',
        description: 'Alias to associate version (latest, stage)',
      },
    },
  },
});

deployDocs?.addJob('deploy-docs', {
  permissions: {
    contents: JobPermission.WRITE,
    pages: JobPermission.WRITE,
  },
  runsOn: ['ubuntu-latest'],
  outputs: {
    getVersion: {
      stepId: 'getVersion',
      outputName: 'version',
    },
  },
  steps: [
    {
      uses: 'actions/checkout@v4',
    },
    {
      uses: 'actions/setup-python@v4',
      with: {
        pythonVersion: '3.8',
      },
    },
    {
      run: 'echo "cache_id=$(date --utc "+%V")" >> $GITHUB_ENV',
    },
    {
      uses: 'actions/cache@v3',
      with: {
        key: 'mkdocs-material-${{ env.cache_id }}',
        path: '.cache',
      },
    },
    {
      name: 'Install doc generations dependencies',
      run: [
        'pip install --upgrade pip',
        'pip install -r docs/requirements.txt',
      ].join('\n'),
    },
    {
      name: 'Setup docs deploy',
      run: [
        'git config user.name github-actions',
        'git config user.email github-actions@github.com',
      ].join('\n'),
    },
    {
      name: 'Get the version',
      id: 'getVersion',
      run: [
        'echo "GIT_TAG=`echo $(git describe --tags --abbrev=0)`"',
        'echo run: echo "version=VERSION::${GITHUB_REF/refs/tags/}" >> "$GITHUB_OUTPUT"',
      ].join('\n'),
    },
    {
      name: 'Build and deploy documentation',
      env: {
        ALIAS: 'latest',
        VERSION: '${{ needs.deploy-docs.outputs.version }}',
      },
      run: [
        'echo ${{ env.VERSION }}',
        'mkdocs build',
        'mike deploy --push --update-aliases ${{ env.VERSION }} ${{ env.ALIAS }}',
        'mike set-default latest',
      ].join('\n'),
    },
  ],
});

project.synth();
