import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AnyPrincipal, Role } from 'aws-cdk-lib/aws-iam';

import {
  CodeStarConnection,
  CodeStarConnectionPolicyActions,
  CodeStarConnectionProviderType,
} from '../src';

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

describe('Grants permisions', () => {
  it('should grant use connection', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');

    // WHEN
    const codestartConnection = new CodeStarConnection(
      stack,
      'CodeStarConnection',
      {
        connectionName: 'test-connection',
        providerType: CodeStarConnectionProviderType.GITHUB,
      }
    );

    const role = new Role(stack, 'Role', {
      assumedBy: new AnyPrincipal(),
    });

    codestartConnection.grantUse(role);

    Template.fromStack(stack).hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: CodeStarConnectionPolicyActions.USE_CONNECTION,
            Effect: 'Allow',
          },
        ],
      },
    });
  });

  it('should grant connection Full Access', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');

    // WHEN
    const codestartConnection = new CodeStarConnection(
      stack,
      'CodeStarConnection',
      {
        connectionName: 'test-connection',
        providerType: CodeStarConnectionProviderType.GITHUB,
      }
    );

    const role = new Role(stack, 'Role', {
      assumedBy: new AnyPrincipal(),
    });

    codestartConnection.grantConnectionFullAccess(role);

    Template.fromStack(stack).hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: [
              CodeStarConnectionPolicyActions.CREATE_CONNECTION,
              CodeStarConnectionPolicyActions.DELETE_CONNECTION,
              CodeStarConnectionPolicyActions.USE_CONNECTION,
              CodeStarConnectionPolicyActions.GET_CONNECTION,
              CodeStarConnectionPolicyActions.LIST_CONNECTIONS,
              CodeStarConnectionPolicyActions.TAG_RESOURCE,
              CodeStarConnectionPolicyActions.LIST_TAGS_FOR_RESOURCE,
              CodeStarConnectionPolicyActions.UNTAG_RESOURCE,
            ],
            Effect: 'Allow',
          },
        ],
      },
    });
  });

  it('should grant Admin Access', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');

    // WHEN
    const codestartConnection = new CodeStarConnection(
      stack,
      'CodeStarConnection',
      {
        connectionName: 'test-connection',
        providerType: CodeStarConnectionProviderType.GITHUB,
      }
    );

    const role = new Role(stack, 'Role', {
      assumedBy: new AnyPrincipal(),
    });

    codestartConnection.grantAdmin(role);

    Template.fromStack(stack).hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: [
              CodeStarConnectionPolicyActions.CREATE_CONNECTION,
              CodeStarConnectionPolicyActions.DELETE_CONNECTION,
              CodeStarConnectionPolicyActions.USE_CONNECTION,
              CodeStarConnectionPolicyActions.GET_CONNECTION,
              CodeStarConnectionPolicyActions.LIST_CONNECTIONS,
              CodeStarConnectionPolicyActions.LIST_INSTALLATION_TARGETS,
              CodeStarConnectionPolicyActions.GET_INSTALLATION_URL,
              CodeStarConnectionPolicyActions.START_OAUTH_HANDSHAKE,
              CodeStarConnectionPolicyActions.UPDATE_CONNECTION_INSTALLATION,
              CodeStarConnectionPolicyActions.GET_INDIVIDUAL_ACCESS_TOKEN,
              CodeStarConnectionPolicyActions.TAG_RESOURCE,
              CodeStarConnectionPolicyActions.LIST_TAGS_FOR_RESOURCE,
              CodeStarConnectionPolicyActions.UNTAG_RESOURCE,
            ],
            Effect: 'Allow',
          },
        ],
      },
    });
  });

  it('should grant Read Access', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');

    // WHEN
    const codestartConnection = new CodeStarConnection(
      stack,
      'CodeStarConnection',
      {
        connectionName: 'test-connection',
        providerType: CodeStarConnectionProviderType.GITHUB,
      }
    );

    const role = new Role(stack, 'Role', {
      assumedBy: new AnyPrincipal(),
    });

    codestartConnection.grantRead(role);

    Template.fromStack(stack).hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: [
              CodeStarConnectionPolicyActions.GET_CONNECTION,
              CodeStarConnectionPolicyActions.LIST_CONNECTIONS,
              CodeStarConnectionPolicyActions.LIST_INSTALLATION_TARGETS,
              CodeStarConnectionPolicyActions.GET_INSTALLATION_URL,
              CodeStarConnectionPolicyActions.LIST_TAGS_FOR_RESOURCE,
            ],
            Effect: 'Allow',
          },
        ],
      },
    });
  });
});

describe('Static methods', () => {
  it('should return a instance of code star connection and use the grantUse method', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');

    // WHEN
    const codestarConnection = CodeStarConnection.fromCodeStarConnectionArn(
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
