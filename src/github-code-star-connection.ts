import { RemovalPolicy, Tag } from 'aws-cdk-lib';
import { CfnConnection } from 'aws-cdk-lib/aws-codestarconnections';
import { Construct } from 'constructs';

import {
  CodeStarConnectionBase,
  CodeStarConnectionProviderType,
  ICodeStarConnection,
} from './code-star-connection';

export interface GithubCodeStarConnetionProps {
  /**
   * The name of the connection.
   * Connection names must be in an AWS user account.
   */
  readonly connectionName?: string;

  /**
   * The Amazon Resource Name (ARN) of the host associated with the connection.
   */
  readonly hostArn?: string;

  /**
   * The list of tags associated with the connection.
   */
  readonly tags?: Tag[];

  /**
   * Determine what happens to the code star connection when the resource/stack is deleted.
   *
   * @default RemovalPolicy.Retain
   */
  readonly removalPolicy?: RemovalPolicy;
}

/**
 * Define a Github CodeStar Connection resource
 * @resource AWS::CodeStarConnections::Connection
 * @example
 *   new GithubCodeStarConnection(this, 'GithubConnection')
 */
export class GithubCodeStarConnection extends CodeStarConnectionBase {
  /**
   * Import an externally defined Code Star Connection using its ARN.
   *
   * @param scope  the construct that will "own" the imported key.
   * @param id     the id of the imported code star conection in the construct tree.
   * @param codestarConnectionArn the ARN of an existing Code Star Connection.
   */
  public static fromCodeStarConnectionArn(
    scope: Construct,
    id: string,
    codestarConnectionArn: string
  ): ICodeStarConnection {
    class Import extends CodeStarConnectionBase {
      public connectionName = '';
      public connectionArn = codestarConnectionArn;
    }

    return new Import(scope, id, {
      environmentFromArn: codestarConnectionArn,
    });
  }

  /**
   * The name of the CodeStar connection
   */
  public readonly connectionName: string;

  /**
   * The ARN of the Code Star connection
   */
  public readonly connectionArn: string;

  constructor(
    scope: Construct,
    id: string,
    props?: GithubCodeStarConnetionProps
  ) {
    super(scope, id, {
      // physicalName: props.connectionName,
    });

    this.connectionName = 'github-connection';

    if (props && props.connectionName) {
      this.validateConnectionName(props.connectionName);
      this.connectionName = props.connectionName;
    }

    const resource = new CfnConnection(this, 'Resource', {
      connectionName: this.connectionName,
      providerType: CodeStarConnectionProviderType.GITHUB,
      hostArn: props?.hostArn,
      tags: props?.tags,
    });

    resource.applyRemovalPolicy(props?.removalPolicy);

    this.connectionArn = resource.attrConnectionArn;
  }
}
