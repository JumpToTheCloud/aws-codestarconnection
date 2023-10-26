import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CodeStarConnection, CodeStarConnectionProviderType } from '../src';

describe('Code Star Connection', () => {
  // GIVEN
  let stack = new Stack();

  // WHEN
  new CodeStarConnection(stack, 'CodeStarConnection', {
    connectionName: 'test-connection',
    providerType: CodeStarConnectionProviderType.GITHUB,
  });

  it('should create a Code Star Connection', () => {
    // THEN
    Template.fromStack(stack).resourceCountIs(
      'AWS::CodeStarConnections::Connection',
      1
    );
  });

  it('should have a Github provider', () => {
    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::CodeStarConnections::Connection',
      {
        ProviderType: 'GitHub',
      }
    );
  });

  it('should have Retention Policy by default', () => {
    Template.fromStack(stack).hasResource(
      'AWS::CodeStarConnections::Connection',
      {
        DeletionPolicy: 'Retain',
        UpdateReplacePolicy: 'Retain',
      }
    );
  });

  it('should thrown an error if the connection name is to long', () => {
    // GIVEN
    const app = new App();
    stack = new Stack(app, 'TestStack');

    // WHEN
    new CodeStarConnection(stack, 'CodeStarConnection', {
      connectionName: 'test-connection-is-longer-than-32-characters',
      providerType: CodeStarConnectionProviderType.GITHUB,
    });

    expect(() =>
      Template.fromStack(app.synth().getStackArtifact(stack.stackId).template)
    ).toThrowError();
  });
});
