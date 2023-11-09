import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

import { AnyPrincipal, Role } from 'aws-cdk-lib/aws-iam';
import {
  CodeStarConnectionPolicyActions,
  GithubCodeStarConnection,
} from '../src';

describe('Code Star Connection', () => {
  // GIVEN
  let stack = new Stack();

  // WHEN
  new GithubCodeStarConnection(stack, 'GithubCodeStarConnection');

  it('should create a Code Star Connection', () => {
    // THEN
    Template.fromStack(stack).resourceCountIs(
      'AWS::CodeStarConnections::Connection',
      1
    );
  });

  it('should have a default connection name', () => {
    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::CodeStarConnections::Connection',
      {
        ConnectionName: 'github-connection',
      }
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
    new GithubCodeStarConnection(stack, 'CodeStarConnection', {
      connectionName: 'test-connection-is-longer-than-32-characters',
    });

    expect(() =>
      Template.fromStack(app.synth().getStackArtifact(stack.stackId).template)
    ).toThrowError();
  });
});

describe('Github Code Star Connection Static methods', () => {
  it('should return a instance of the github code star connection and use the grantUse method', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');

    // WHEN
    const codestarConnection =
      GithubCodeStarConnection.fromCodeStarConnectionArn(
        stack,
        'CodeStarConnectionFromArn',
        'arn:aws:codestar-connections:eu-west-1:123456789012:connection/8c86942e-a7ca-4a4a-8b63-e2f7f5efaeee'
      );

    const role = new Role(stack, 'Role', {
      assumedBy: new AnyPrincipal(),
    });

    codestarConnection.grantUse(role);

    Template.fromStack(stack).hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: CodeStarConnectionPolicyActions.USE_CONNECTION,
            Effect: 'Allow',
            Resource: codestarConnection.connectionArn,
          },
        ],
      },
    });
  });
});
