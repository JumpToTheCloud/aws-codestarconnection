import { awscdk } from 'projen';
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

project.synth();
