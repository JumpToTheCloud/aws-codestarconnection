import {
  Annotations,
  IResource,
  RemovalPolicy,
  Resource,
  Tag,
} from 'aws-cdk-lib';
import { CfnConnection } from 'aws-cdk-lib/aws-codestarconnections';

import { Construct } from 'constructs';

/**
 * Connection Provider Type supported
 */
export enum CodeStarConnectionProviderType {
  /**
   * Github provider
   */
  GITHUB = 'GitHub',

  /**
   * Github Entrprise provider
   */
  GITHUB_ENTERPRISE = 'GitHubEnterpriseServer',

  /**
   * Gitlab Provider
   */
  GITLAB = 'GitLab',

  /**
   * Bitbucket Provider
   */
  BITBUCKET = 'Bitbucket',
}

/**
 * Actions defined by AWS CodeStar Connections
 * Service prefix: codestar-connections
 *
 * The Resource Type indicates whether each action supports resource-level permissions.
 * If there is no value, you must specify all resources ("*") to which the policy applies
 * in the Resource element of your policy statement
 *
 * The Condition Keys includes keys that you can specify in a policy statement's Condition element
 */
export enum CodeStarConnectionPolicyActions {
  /**
   * Grants permission to create a Connection resource
   * @accessLevel Write
   * @conditionKeys aws:RequestTag/${aws:TagKeys}
   * @conditionKeys aws:TagKeys
   * @conditionKeys codestar-connections:ProviderType
   */
  CREATE_CONNECTION = 'codestar-connections:CreateConnection',

  /**
   * Grants permission to create a Host resource
   * @accessLevel Write
   * @conditionKeys aws:RequestTag/${aws:TagKeys}
   * @conditionKeys aws:TagKeys
   * @conditionKeys codestar-connections:ProviderType
   */
  CREATE_HOST = 'codestar-connections:CreateHost',

  /**
   * Grants permission to delete a Connection resource
   * @accessLevel Write
   * @resourceTypes arn:${Partition}:codestar-connections:${Region}:${Account}:connection/${ConnectionId} (Required)
   */
  DELETE_CONNECTION = 'codestar-connections:DeleteConnection',

  /**
   * Grants permission to delete a host resource
   * @accessLevel Write
   * @resourceTypes arn:${Partition}:codestar-connections:${Region}:${Account}:host/${HostId} (Required)
   */
  DELETE_HOST = 'codestar-connections:DeleteHost',

  /**
   * Grants permission to get details about a Connection resource
   * @accessLevel Read
   * @resourceTypes arn:${Partition}:codestar-connections:${Region}:${Account}:connection/${ConnectionId} (Required)
   */
  GET_CONNECTION = 'codestar-connections:GetConnection',

  /**
   * Grants permission to get details about a host resource
   * @accessLevel Read
   * @resourceTypes arn:${Partition}:codestar-connections:${Region}:${Account}:host/${HostId} (Required)
   */
  GET_HOST = 'codestar-connections:GetHost',

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   * @accessLevel Read
   * @conditionKeys codestar-connections:ProviderType
   * @dependsOn codestar-connections:StarOAuthHandshake
   */
  GET_INDIVIDUAL_ACCESS_TOKEN = 'codestar-connections:GetIndividualAccessToken',

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   * @accessLevel Read
   * @conditionKeys codestar-connections:ProviderType
   * @dependsOn codestar-connections:StarOAuthHandshake
   */
  GET_INSTALLATION_URL_FOR_APP = 'codestar-connections:GetInstallationUrlForApp',

  /**
   * Grants permission to get the URL to authorize an installation in a third party app
   * @accessLevel Read
   * @conditionKeys codestar-connections:ProviderType
   * @dependsOn codestar-connections:StarOAuthHandshake
   */
  GET_INSTALLATION_URL_FOR_HOST = 'codestar-connections:GetInstallationUrlForHost',

  /**
   * Grants permission to get the URL to authorize an installation in a third party app
   * @accessLevel Read
   * @conditionKeys codestar-connections:ProviderType
   */
  GET_INSTALLATION_URL = 'codestar-connections:GetInstallationUrl',

  /**
   * Grants permission to list Connection resources
   * @accessLevel List
   * @conditionKeys codestar-connections:ProviderTypeFilter
   */
  LIST_CONNECTIONS = 'codestar-connections:ListConnections',

  /**
   * Grants permission to list host resources
   * @accessLevel List
   * @conditionKeys codestar-connections:ProviderTypeFilter
   */
  LIST_HOSTS = 'codestar-connections:ListHosts',

  /**
   * Grants permission to list individual access token
   * @accessLevel List
   */
  LIST_INDIVIDUAL_ACCESS_TOKENS = 'codestar-connections:ListIndividualAccessTokens',

  /**
   * Grants permission to list installations
   * @accessLevel List
   */
  LIST_INSTALLATIONS = 'codestar-connections:ListInstallations',

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   * @accessLevel List
   * @dependson codestar-connections:GetIndividualAccessToken
   * @dependsOn codestar-connections:StarOAuthHandshake
   */
  LIST_INSTALLATION_TARGETS = 'codestar-connections:ListInstallationTargets',

  /**
   * Grants permission to list pass connections
   * @accessLevel List
   */
  LIST_PASS_CONNECTIONS = 'codestar-connections:ListPassConnections',

  /**
   * Grants permission to the set of key-value pairs that are used to manage the resource
   * @accessList List
   * @resouceTypes arn:${Partition}:codestar-connections:${Region}:${Account}:connection/${ConnectionId} (Required)
   */
  LIST_TAGS_FOR_RESOURCE = 'codestar-connections:ListTagsForResource',

  /**
   * Grants permission to pass a Connection resource to an AWS service that accepts a Connection ARN as input, such as codepipeline:CreatePipeline
   * @accessLevel Read
   * @resourceTypes arn:${Partition}:codestar-connections:${Region}:${Account}:connection/${ConnectionId}
   * @conditionKeys codestar-connections:PassToService
   */
  PASS_CONNECTION = 'codestar-connections:PassConnection',

  /**
   * Grants permission to associate a third party server, such as a GitHub Enterprise Server instance, with a Host
   * @accessLevel Read
   * @conditionKeys codestar-connections:HostArn
   */
  REGISTER_APP_CODE = 'codestar-connections:RegisterAppCode',

  /**
   * Grants permission to associate a third party server, such as a GitHub Enterprise Server instance, with a Host
   * @accessLevel Read
   * @conditionKeys codestar-connections:HostArn
   */
  START_APP_REGISTRATION_HANDSHAKE = 'codestar-connections:StartAppRegistrationHandshake',

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   * @accessLevel Read
   * @conditionKeys codestar-connections:ProviderType
   */
  START_OAUTH_HANDSHAKE = 'codestar-connections:StartOAuthHandshake',

  /**
   * Grants permission to add or modify the tags of the given resource
   * @accessLevel Tagging
   * @resourceTypes arn:${Partition}:codestar-connections:${Region}:${Account}:connection/${ConnectionId} (Required)
   * @conditionKeys aws:RequestTag/${aws:TagKeys}
   * @conditionKeys aws:TagKeys
   */
  TAG_RESOURCE = 'codestar-connections:TagResource',

  /**
   * Grants permission to remove tags from an AWS resource
   * @accessLevel Tagging
   * @resourceTypes arn:${Partition}:codestar-connections:${Region}:${Account}:connection/${ConnectionId} (Required)
   * @conditionKeys aws:TagKeys
   */
  UNTAG_RESOURCE = 'codestar-connections:UntagResource',

  /**
   * Grants permission to update a Connection resource with an installation of the CodeStar Connections App
   * @accessLevel Write
   * @resourceTypes arn:${Partition}:codestar-connections:${Region}:${Account}:connection/${ConnectionId} (Required)
   * @dependsOn codestar-connections:GetInstallationUrl
   * @dependsOn codestar-connections:GetIndividualAccessToken
   * @dependsOn codestar-connections:StarOAuthHandshake
   * @dependsOn codestar-connections:ListInstallationTargets
   * @conditionKeys codestar-connections:InstallationId
   */
  UPDATE_CONNECTION_INSTALLATION = 'codestar-connections:UpdateConnectionInstallation',

  /**
   * Grants permission to update a host resource
   * @accessLevel Write
   * @resourceTypes arn:${Partition}:codestar-connections:${Region}:${Account}:host/${HostId} (Required)
   */
  UPDATE_HOST = 'codestar-connections:UpdateHost',

  /**
   * Grants permission to use a Connection resource to call provider actions
   * @accessLevel Read
   * @resourceTypes arn:${Partition}:codestar-connections:${Region}:${Account}:connection/${ConnectionId} (Required)
   * @conditionKeys codestar-connections:FullRepositoryId
   * @conditionKeys codestar-connections:ProviderAction
   * @conditionKeys codestar-connections:ProviderPermissionsRequired
   */
  USE_CONNECTION = 'codestar-connections:UseConnection',
}

export interface ICodeStarConnection extends IResource {
  /**
   * The name of the connection.
   * Connection names must be in an AWS user account.
   */
  readonly connectionName: string;

  /**
   * The ARN of the connection.
   */
  readonly connectionArn: string;
}

export abstract class CodeStarConnectionBase
  extends Resource
  implements ICodeStarConnection
{
  /**
   * The name of the Code Star connection
   */
  public abstract readonly connectionName: string;

  /**
   * The ARN of the Code Star connection
   */
  public abstract readonly connectionArn: string;
}

export interface CodeStarConnectionProps {
  /**
   * The name of the connection.
   * Connection names must be in an AWS user account.
   */
  readonly connectionName: string;

  /**
   * The type of the connection.
   */
  readonly providerType: CodeStarConnectionProviderType;

  /**
   * The Amazon Resource Name (ARN) of the host associated with the connection.
   */
  readonly hostArn?: string;

  /**
   * The list of tags associated with the connection.
   */
  readonly tags?: Tag[];

  /**
   * Determine what happens to the repository when the resource/stack is deleted.
   *
   * @default RemovalPolicy.Retain
   */
  readonly removalPolicy?: RemovalPolicy;
}

/**
 * Define a CodeStar Connection resource
 * @resource AWS::CodeStarConnections::Connection
 * @example
 *
 *   new CodeStarConnection(this, 'MyConnection', {
 *     connectionName: 'MyConnection',
 *     providerType: 'GitHub',
 *     tags: [{
 *       key: 'key',
 *       value: 'value',
 *     }],
 *   }
 */
export class CodeStarConnection extends CodeStarConnectionBase {
  public readonly connectionName: string;
  public readonly connectionArn: string;

  constructor(scope: Construct, id: string, props: CodeStarConnectionProps) {
    super(scope, id, {
      physicalName: props.connectionName,
    });

    this.validateConnectionName(props.connectionName);

    const resource = new CfnConnection(this, 'Resource', {
      connectionName: props.connectionName,
      providerType: props.providerType,
      hostArn: props.hostArn,
      tags: props.tags,
    });

    resource.applyRemovalPolicy(props.removalPolicy);

    this.connectionName = props.connectionName;
    this.connectionArn = resource.attrConnectionArn;
  }

  private validateConnectionName(qualifier: string): void {
    // Rules codified from https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-connectionname
    if (qualifier.length < 2 || qualifier.length > 32) {
      Annotations.of(this).addError(
        'Connection Name must be at least 1 and no more than 32 characters'
      );
    }
  }
}
