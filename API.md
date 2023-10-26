# AWS CodeStar Connection

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeStarConnection <a name="CodeStarConnection" id="@jttc/aws-codestarconnection.CodeStarConnection"></a>

Define a CodeStar Connection resource.

*Example*

```typescript
  new CodeStarConnection(this, 'MyConnection', {
    connectionName: 'MyConnection',
    providerType: 'GitHub',
    tags: [{
      key: 'key',
      value: 'value',
    }],
  }
```


#### Initializers <a name="Initializers" id="@jttc/aws-codestarconnection.CodeStarConnection.Initializer"></a>

```typescript
import { CodeStarConnection } from '@jttc/aws-codestarconnection'

new CodeStarConnection(scope: Construct, id: string, props: CodeStarConnectionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.Initializer.parameter.props">props</a></code> | <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionProps">CodeStarConnectionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-codestarconnection.CodeStarConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-codestarconnection.CodeStarConnection.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@jttc/aws-codestarconnection.CodeStarConnection.Initializer.parameter.props"></a>

- *Type:* <a href="#@jttc/aws-codestarconnection.CodeStarConnectionProps">CodeStarConnectionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@jttc/aws-codestarconnection.CodeStarConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jttc/aws-codestarconnection.CodeStarConnection.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jttc/aws-codestarconnection.CodeStarConnection.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@jttc/aws-codestarconnection.CodeStarConnection.isConstruct"></a>

```typescript
import { CodeStarConnection } from '@jttc/aws-codestarconnection'

CodeStarConnection.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jttc/aws-codestarconnection.CodeStarConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jttc/aws-codestarconnection.CodeStarConnection.isOwnedResource"></a>

```typescript
import { CodeStarConnection } from '@jttc/aws-codestarconnection'

CodeStarConnection.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-codestarconnection.CodeStarConnection.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jttc/aws-codestarconnection.CodeStarConnection.isResource"></a>

```typescript
import { CodeStarConnection } from '@jttc/aws-codestarconnection'

CodeStarConnection.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-codestarconnection.CodeStarConnection.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.property.connectionArn">connectionArn</a></code> | <code>string</code> | The ARN of the Code Star connection. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnection.property.connectionName">connectionName</a></code> | <code>string</code> | The name of the Code Star connection. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-codestarconnection.CodeStarConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-codestarconnection.CodeStarConnection.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-codestarconnection.CodeStarConnection.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@jttc/aws-codestarconnection.CodeStarConnection.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

The ARN of the Code Star connection.

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@jttc/aws-codestarconnection.CodeStarConnection.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The name of the Code Star connection.

---


### CodeStarConnectionBase <a name="CodeStarConnectionBase" id="@jttc/aws-codestarconnection.CodeStarConnectionBase"></a>

- *Implements:* <a href="#@jttc/aws-codestarconnection.ICodeStarConnection">ICodeStarConnection</a>

#### Initializers <a name="Initializers" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.Initializer"></a>

```typescript
import { CodeStarConnectionBase } from '@jttc/aws-codestarconnection'

new CodeStarConnectionBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.isConstruct"></a>

```typescript
import { CodeStarConnectionBase } from '@jttc/aws-codestarconnection'

CodeStarConnectionBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.isOwnedResource"></a>

```typescript
import { CodeStarConnectionBase } from '@jttc/aws-codestarconnection'

CodeStarConnectionBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.isResource"></a>

```typescript
import { CodeStarConnectionBase } from '@jttc/aws-codestarconnection'

CodeStarConnectionBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.property.connectionArn">connectionArn</a></code> | <code>string</code> | The ARN of the Code Star connection. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase.property.connectionName">connectionName</a></code> | <code>string</code> | The name of the Code Star connection. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

The ARN of the Code Star connection.

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@jttc/aws-codestarconnection.CodeStarConnectionBase.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The name of the Code Star connection.

---


## Structs <a name="Structs" id="Structs"></a>

### CodeStarConnectionProps <a name="CodeStarConnectionProps" id="@jttc/aws-codestarconnection.CodeStarConnectionProps"></a>

#### Initializer <a name="Initializer" id="@jttc/aws-codestarconnection.CodeStarConnectionProps.Initializer"></a>

```typescript
import { CodeStarConnectionProps } from '@jttc/aws-codestarconnection'

const codeStarConnectionProps: CodeStarConnectionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionProps.property.connectionName">connectionName</a></code> | <code>string</code> | The name of the connection. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionProps.property.providerType">providerType</a></code> | <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionProviderType">CodeStarConnectionProviderType</a></code> | The type of the connection. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionProps.property.hostArn">hostArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the host associated with the connection. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine what happens to the repository when the resource/stack is deleted. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionProps.property.tags">tags</a></code> | <code>aws-cdk-lib.Tag[]</code> | The list of tags associated with the connection. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@jttc/aws-codestarconnection.CodeStarConnectionProps.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The name of the connection.

Connection names must be in an AWS user account.

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@jttc/aws-codestarconnection.CodeStarConnectionProps.property.providerType"></a>

```typescript
public readonly providerType: CodeStarConnectionProviderType;
```

- *Type:* <a href="#@jttc/aws-codestarconnection.CodeStarConnectionProviderType">CodeStarConnectionProviderType</a>

The type of the connection.

---

##### `hostArn`<sup>Optional</sup> <a name="hostArn" id="@jttc/aws-codestarconnection.CodeStarConnectionProps.property.hostArn"></a>

```typescript
public readonly hostArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the host associated with the connection.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@jttc/aws-codestarconnection.CodeStarConnectionProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.Retain

Determine what happens to the repository when the resource/stack is deleted.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@jttc/aws-codestarconnection.CodeStarConnectionProps.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* aws-cdk-lib.Tag[]

The list of tags associated with the connection.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ICodeStarConnection <a name="ICodeStarConnection" id="@jttc/aws-codestarconnection.ICodeStarConnection"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@jttc/aws-codestarconnection.CodeStarConnection">CodeStarConnection</a>, <a href="#@jttc/aws-codestarconnection.CodeStarConnectionBase">CodeStarConnectionBase</a>, <a href="#@jttc/aws-codestarconnection.ICodeStarConnection">ICodeStarConnection</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.ICodeStarConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jttc/aws-codestarconnection.ICodeStarConnection.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jttc/aws-codestarconnection.ICodeStarConnection.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jttc/aws-codestarconnection.ICodeStarConnection.property.connectionArn">connectionArn</a></code> | <code>string</code> | The ARN of the connection. |
| <code><a href="#@jttc/aws-codestarconnection.ICodeStarConnection.property.connectionName">connectionName</a></code> | <code>string</code> | The name of the connection. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jttc/aws-codestarconnection.ICodeStarConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jttc/aws-codestarconnection.ICodeStarConnection.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jttc/aws-codestarconnection.ICodeStarConnection.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@jttc/aws-codestarconnection.ICodeStarConnection.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

The ARN of the connection.

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@jttc/aws-codestarconnection.ICodeStarConnection.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The name of the connection.

Connection names must be in an AWS user account.

---

## Enums <a name="Enums" id="Enums"></a>

### CodeStarConnectionPolicyActions <a name="CodeStarConnectionPolicyActions" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions"></a>

Actions defined by AWS CodeStar Connections Service prefix: codestar-connections.

The Resource Type indicates whether each action supports resource-level permissions.
If there is no value, you must specify all resources ("*") to which the policy applies
in the Resource element of your policy statement

The Condition Keys includes keys that you can specify in a policy statement's Condition element

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.CREATE_CONNECTION">CREATE_CONNECTION</a></code> | Grants permission to create a Connection resource. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.CREATE_HOST">CREATE_HOST</a></code> | Grants permission to create a Host resource. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.DELETE_CONNECTION">DELETE_CONNECTION</a></code> | Grants permission to delete a Connection resource. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.DELETE_HOST">DELETE_HOST</a></code> | Grants permission to delete a host resource. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_CONNECTION">GET_CONNECTION</a></code> | Grants permission to get details about a Connection resource. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_HOST">GET_HOST</a></code> | Grants permission to get details about a host resource. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_INDIVIDUAL_ACCESS_TOKEN">GET_INDIVIDUAL_ACCESS_TOKEN</a></code> | Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_INSTALLATION_URL_FOR_APP">GET_INSTALLATION_URL_FOR_APP</a></code> | Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_INSTALLATION_URL_FOR_HOST">GET_INSTALLATION_URL_FOR_HOST</a></code> | Grants permission to get the URL to authorize an installation in a third party app. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_INSTALLATION_URL">GET_INSTALLATION_URL</a></code> | Grants permission to get the URL to authorize an installation in a third party app. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_CONNECTIONS">LIST_CONNECTIONS</a></code> | Grants permission to list Connection resources. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_HOSTS">LIST_HOSTS</a></code> | Grants permission to list host resources. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_INDIVIDUAL_ACCESS_TOKENS">LIST_INDIVIDUAL_ACCESS_TOKENS</a></code> | Grants permission to list individual access token. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_INSTALLATIONS">LIST_INSTALLATIONS</a></code> | Grants permission to list installations. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_INSTALLATION_TARGETS">LIST_INSTALLATION_TARGETS</a></code> | Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_PASS_CONNECTIONS">LIST_PASS_CONNECTIONS</a></code> | Grants permission to list pass connections. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_TAGS_FOR_RESOURCE">LIST_TAGS_FOR_RESOURCE</a></code> | Grants permission to the set of key-value pairs that are used to manage the resource. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.PASS_CONNECTION">PASS_CONNECTION</a></code> | Grants permission to pass a Connection resource to an AWS service that accepts a Connection ARN as input, such as codepipeline:CreatePipeline. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.REGISTER_APP_CODE">REGISTER_APP_CODE</a></code> | Grants permission to associate a third party server, such as a GitHub Enterprise Server instance, with a Host. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.START_APP_REGISTRATION_HANDSHAKE">START_APP_REGISTRATION_HANDSHAKE</a></code> | Grants permission to associate a third party server, such as a GitHub Enterprise Server instance, with a Host. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.START_OAUTH_HANDSHAKE">START_OAUTH_HANDSHAKE</a></code> | Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.TAG_RESOURCE">TAG_RESOURCE</a></code> | Grants permission to add or modify the tags of the given resource. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.UNTAG_RESOURCE">UNTAG_RESOURCE</a></code> | Grants permission to remove tags from an AWS resource. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.UPDATE_CONNECTION_INSTALLATION">UPDATE_CONNECTION_INSTALLATION</a></code> | Grants permission to update a Connection resource with an installation of the CodeStar Connections App. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.UPDATE_HOST">UPDATE_HOST</a></code> | Grants permission to update a host resource. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.USE_CONNECTION">USE_CONNECTION</a></code> | Grants permission to use a Connection resource to call provider actions. |

---

##### `CREATE_CONNECTION` <a name="CREATE_CONNECTION" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.CREATE_CONNECTION"></a>

Grants permission to create a Connection resource.

---


##### `CREATE_HOST` <a name="CREATE_HOST" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.CREATE_HOST"></a>

Grants permission to create a Host resource.

---


##### `DELETE_CONNECTION` <a name="DELETE_CONNECTION" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.DELETE_CONNECTION"></a>

Grants permission to delete a Connection resource.

---


##### `DELETE_HOST` <a name="DELETE_HOST" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.DELETE_HOST"></a>

Grants permission to delete a host resource.

---


##### `GET_CONNECTION` <a name="GET_CONNECTION" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_CONNECTION"></a>

Grants permission to get details about a Connection resource.

---


##### `GET_HOST` <a name="GET_HOST" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_HOST"></a>

Grants permission to get details about a host resource.

---


##### `GET_INDIVIDUAL_ACCESS_TOKEN` <a name="GET_INDIVIDUAL_ACCESS_TOKEN" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_INDIVIDUAL_ACCESS_TOKEN"></a>

Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection.

---


##### `GET_INSTALLATION_URL_FOR_APP` <a name="GET_INSTALLATION_URL_FOR_APP" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_INSTALLATION_URL_FOR_APP"></a>

Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection.

---


##### `GET_INSTALLATION_URL_FOR_HOST` <a name="GET_INSTALLATION_URL_FOR_HOST" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_INSTALLATION_URL_FOR_HOST"></a>

Grants permission to get the URL to authorize an installation in a third party app.

---


##### `GET_INSTALLATION_URL` <a name="GET_INSTALLATION_URL" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.GET_INSTALLATION_URL"></a>

Grants permission to get the URL to authorize an installation in a third party app.

---


##### `LIST_CONNECTIONS` <a name="LIST_CONNECTIONS" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_CONNECTIONS"></a>

Grants permission to list Connection resources.

---


##### `LIST_HOSTS` <a name="LIST_HOSTS" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_HOSTS"></a>

Grants permission to list host resources.

---


##### `LIST_INDIVIDUAL_ACCESS_TOKENS` <a name="LIST_INDIVIDUAL_ACCESS_TOKENS" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_INDIVIDUAL_ACCESS_TOKENS"></a>

Grants permission to list individual access token.

---


##### `LIST_INSTALLATIONS` <a name="LIST_INSTALLATIONS" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_INSTALLATIONS"></a>

Grants permission to list installations.

---


##### `LIST_INSTALLATION_TARGETS` <a name="LIST_INSTALLATION_TARGETS" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_INSTALLATION_TARGETS"></a>

Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection.

---


##### `LIST_PASS_CONNECTIONS` <a name="LIST_PASS_CONNECTIONS" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_PASS_CONNECTIONS"></a>

Grants permission to list pass connections.

---


##### `LIST_TAGS_FOR_RESOURCE` <a name="LIST_TAGS_FOR_RESOURCE" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.LIST_TAGS_FOR_RESOURCE"></a>

Grants permission to the set of key-value pairs that are used to manage the resource.

---


##### `PASS_CONNECTION` <a name="PASS_CONNECTION" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.PASS_CONNECTION"></a>

Grants permission to pass a Connection resource to an AWS service that accepts a Connection ARN as input, such as codepipeline:CreatePipeline.

---


##### `REGISTER_APP_CODE` <a name="REGISTER_APP_CODE" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.REGISTER_APP_CODE"></a>

Grants permission to associate a third party server, such as a GitHub Enterprise Server instance, with a Host.

---


##### `START_APP_REGISTRATION_HANDSHAKE` <a name="START_APP_REGISTRATION_HANDSHAKE" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.START_APP_REGISTRATION_HANDSHAKE"></a>

Grants permission to associate a third party server, such as a GitHub Enterprise Server instance, with a Host.

---


##### `START_OAUTH_HANDSHAKE` <a name="START_OAUTH_HANDSHAKE" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.START_OAUTH_HANDSHAKE"></a>

Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection.

---


##### `TAG_RESOURCE` <a name="TAG_RESOURCE" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.TAG_RESOURCE"></a>

Grants permission to add or modify the tags of the given resource.

---


##### `UNTAG_RESOURCE` <a name="UNTAG_RESOURCE" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.UNTAG_RESOURCE"></a>

Grants permission to remove tags from an AWS resource.

---


##### `UPDATE_CONNECTION_INSTALLATION` <a name="UPDATE_CONNECTION_INSTALLATION" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.UPDATE_CONNECTION_INSTALLATION"></a>

Grants permission to update a Connection resource with an installation of the CodeStar Connections App.

---


##### `UPDATE_HOST` <a name="UPDATE_HOST" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.UPDATE_HOST"></a>

Grants permission to update a host resource.

---


##### `USE_CONNECTION` <a name="USE_CONNECTION" id="@jttc/aws-codestarconnection.CodeStarConnectionPolicyActions.USE_CONNECTION"></a>

Grants permission to use a Connection resource to call provider actions.

---


### CodeStarConnectionProviderType <a name="CodeStarConnectionProviderType" id="@jttc/aws-codestarconnection.CodeStarConnectionProviderType"></a>

Connection Provider Type supported.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionProviderType.GITHUB">GITHUB</a></code> | Github provider. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionProviderType.GITHUB_ENTERPRISE">GITHUB_ENTERPRISE</a></code> | Github Entrprise provider. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionProviderType.GITLAB">GITLAB</a></code> | Gitlab Provider. |
| <code><a href="#@jttc/aws-codestarconnection.CodeStarConnectionProviderType.BITBUCKET">BITBUCKET</a></code> | Bitbucket Provider. |

---

##### `GITHUB` <a name="GITHUB" id="@jttc/aws-codestarconnection.CodeStarConnectionProviderType.GITHUB"></a>

Github provider.

---


##### `GITHUB_ENTERPRISE` <a name="GITHUB_ENTERPRISE" id="@jttc/aws-codestarconnection.CodeStarConnectionProviderType.GITHUB_ENTERPRISE"></a>

Github Entrprise provider.

---


##### `GITLAB` <a name="GITLAB" id="@jttc/aws-codestarconnection.CodeStarConnectionProviderType.GITLAB"></a>

Gitlab Provider.

---


##### `BITBUCKET` <a name="BITBUCKET" id="@jttc/aws-codestarconnection.CodeStarConnectionProviderType.BITBUCKET"></a>

Bitbucket Provider.

---

