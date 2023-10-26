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

const prLint = project.github?.tryFindWorkflow('pull-request-lint');

prLint?.updateJob('validate', {
  name: 'Validate PR title',
  runsOn: ['ubuntu-latest'],
  permissions: {
    pullRequests: JobPermission.WRITE,
  },
  steps: [
    {
      uses: 'amannn/action-semantic-pull-request@v5.0.2',
      env: {
        GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
      },
      with: {
        types: ['feat', 'fix', 'chore', 'docs'].join('\n'),
        requireScope: false,
        githubBaseUrl: '${{ github.api_url }}',
      },
    },
  ],
});

const deployDocs = project.github?.addWorkflow('deploy-docs');
deployDocs?.on({
  workflowDispatch: {},
  workflowRun: {
    workflows: ['release'],
    types: ['completed'],
  },
});

deployDocs?.addJob('deploy-docs', {
  permissions: {
    contents: JobPermission.WRITE,
  },
  runsOn: ['ubuntu-latest'],
  steps: [
    {
      uses: 'actions/checkout@v4',
    },
    {
      uses: 'actions/setup-python@v4',
      with: {
        pythonVersion: '3.x',
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
      run: 'pip install mkdocs-material',
    },
    {
      run: 'mkdocs gh-deploy --force',
    },
  ],
});

project.synth();
