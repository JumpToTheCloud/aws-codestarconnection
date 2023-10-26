import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

import { CodeStarConnection, CodeStarConnectionProviderType } from '../src';

describe('Snapshot test validation', () => {
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
