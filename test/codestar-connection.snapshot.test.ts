import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

import {
  CodeStarConnection,
  CodeStarConnectionProviderType,
} from '../src/code-star-connection';

import { GithubCodeStarConnection } from '../src/github-code-star-connection';

describe('Code Star Connection Snapshot test validation', () => {
  // Given a new Stack
  const stack = new Stack();

  // WHEN
  new CodeStarConnection(stack, 'MyConnection', {
    connectionName: 'MyConnection',
    providerType: CodeStarConnectionProviderType.GITHUB,
  });

  // THEN
  it('Code Star Connection validation test', () => {
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});

describe('Github Code Star Snapshot test validation', () => {
  // Given a new Stack
  const stack = new Stack();

  // WHEN
  new GithubCodeStarConnection(stack, 'MyGithubConnection');

  // THEN
  it('Code Star Connection validation test', () => {
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
