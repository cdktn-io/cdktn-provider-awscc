# `sqsQueue` Submodule <a name="`sqsQueue` Submodule" id="@cdktn/provider-awscc.sqsQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueue <a name="SqsQueue" id="@cdktn/provider-awscc.sqsQueue.SqsQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue awscc_sqs_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer"></a>

```typescript
import { sqsQueue } from '@cdktn/provider-awscc'

new sqsQueue.SqsQueue(scope: Construct, id: string, config?: SqsQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig">SqsQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig">SqsQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetContentBasedDeduplication">resetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDeduplicationScope">resetDeduplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDelaySeconds">resetDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoQueue">resetFifoQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoThroughputLimit">resetFifoThroughputLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds">resetKmsDataKeyReusePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMaximumMessageSize">resetMaximumMessageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMessageRetentionPeriod">resetMessageRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetQueueName">resetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetReceiveMessageWaitTimeSeconds">resetReceiveMessageWaitTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedriveAllowPolicy">resetRedriveAllowPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedrivePolicy">resetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetSqsManagedSseEnabled">resetSqsManagedSseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetVisibilityTimeout">resetVisibilityTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.putTags"></a>

```typescript
public putTags(value: IResolvable | SqsQueueTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]

---

##### `resetContentBasedDeduplication` <a name="resetContentBasedDeduplication" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetContentBasedDeduplication"></a>

```typescript
public resetContentBasedDeduplication(): void
```

##### `resetDeduplicationScope` <a name="resetDeduplicationScope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDeduplicationScope"></a>

```typescript
public resetDeduplicationScope(): void
```

##### `resetDelaySeconds` <a name="resetDelaySeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDelaySeconds"></a>

```typescript
public resetDelaySeconds(): void
```

##### `resetFifoQueue` <a name="resetFifoQueue" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoQueue"></a>

```typescript
public resetFifoQueue(): void
```

##### `resetFifoThroughputLimit` <a name="resetFifoThroughputLimit" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoThroughputLimit"></a>

```typescript
public resetFifoThroughputLimit(): void
```

##### `resetKmsDataKeyReusePeriodSeconds` <a name="resetKmsDataKeyReusePeriodSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds"></a>

```typescript
public resetKmsDataKeyReusePeriodSeconds(): void
```

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsMasterKeyId"></a>

```typescript
public resetKmsMasterKeyId(): void
```

##### `resetMaximumMessageSize` <a name="resetMaximumMessageSize" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMaximumMessageSize"></a>

```typescript
public resetMaximumMessageSize(): void
```

##### `resetMessageRetentionPeriod` <a name="resetMessageRetentionPeriod" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMessageRetentionPeriod"></a>

```typescript
public resetMessageRetentionPeriod(): void
```

##### `resetQueueName` <a name="resetQueueName" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetQueueName"></a>

```typescript
public resetQueueName(): void
```

##### `resetReceiveMessageWaitTimeSeconds` <a name="resetReceiveMessageWaitTimeSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetReceiveMessageWaitTimeSeconds"></a>

```typescript
public resetReceiveMessageWaitTimeSeconds(): void
```

##### `resetRedriveAllowPolicy` <a name="resetRedriveAllowPolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedriveAllowPolicy"></a>

```typescript
public resetRedriveAllowPolicy(): void
```

##### `resetRedrivePolicy` <a name="resetRedrivePolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedrivePolicy"></a>

```typescript
public resetRedrivePolicy(): void
```

##### `resetSqsManagedSseEnabled` <a name="resetSqsManagedSseEnabled" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetSqsManagedSseEnabled"></a>

```typescript
public resetSqsManagedSseEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVisibilityTimeout` <a name="resetVisibilityTimeout" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetVisibilityTimeout"></a>

```typescript
public resetVisibilityTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SqsQueue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isConstruct"></a>

```typescript
import { sqsQueue } from '@cdktn/provider-awscc'

sqsQueue.SqsQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformElement"></a>

```typescript
import { sqsQueue } from '@cdktn/provider-awscc'

sqsQueue.SqsQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformResource"></a>

```typescript
import { sqsQueue } from '@cdktn/provider-awscc'

sqsQueue.SqsQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport"></a>

```typescript
import { sqsQueue } from '@cdktn/provider-awscc'

sqsQueue.SqsQueue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SqsQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqsQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqsQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SqsQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList">SqsQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput">contentBasedDeduplicationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScopeInput">deduplicationScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySecondsInput">delaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueueInput">fifoQueueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimitInput">fifoThroughputLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput">kmsDataKeyReusePeriodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSizeInput">maximumMessageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriodInput">messageRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueNameInput">queueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSecondsInput">receiveMessageWaitTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicyInput">redriveAllowPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicyInput">redrivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput">sqsManagedSseEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeoutInput">visibilityTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScope">deduplicationScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySeconds">delaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueue">fifoQueue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimit">fifoThroughputLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSize">maximumMessageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriod">messageRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSeconds">receiveMessageWaitTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicy">redriveAllowPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicy">redrivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabled">sqsManagedSseEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeout">visibilityTimeout</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tags"></a>

```typescript
public readonly tags: SqsQueueTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList">SqsQueueTagsList</a>

---

##### `contentBasedDeduplicationInput`<sup>Optional</sup> <a name="contentBasedDeduplicationInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput"></a>

```typescript
public readonly contentBasedDeduplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deduplicationScopeInput`<sup>Optional</sup> <a name="deduplicationScopeInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScopeInput"></a>

```typescript
public readonly deduplicationScopeInput: string;
```

- *Type:* string

---

##### `delaySecondsInput`<sup>Optional</sup> <a name="delaySecondsInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySecondsInput"></a>

```typescript
public readonly delaySecondsInput: number;
```

- *Type:* number

---

##### `fifoQueueInput`<sup>Optional</sup> <a name="fifoQueueInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueueInput"></a>

```typescript
public readonly fifoQueueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fifoThroughputLimitInput`<sup>Optional</sup> <a name="fifoThroughputLimitInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimitInput"></a>

```typescript
public readonly fifoThroughputLimitInput: string;
```

- *Type:* string

---

##### `kmsDataKeyReusePeriodSecondsInput`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSecondsInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput"></a>

```typescript
public readonly kmsDataKeyReusePeriodSecondsInput: number;
```

- *Type:* number

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput"></a>

```typescript
public readonly kmsMasterKeyIdInput: string;
```

- *Type:* string

---

##### `maximumMessageSizeInput`<sup>Optional</sup> <a name="maximumMessageSizeInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSizeInput"></a>

```typescript
public readonly maximumMessageSizeInput: number;
```

- *Type:* number

---

##### `messageRetentionPeriodInput`<sup>Optional</sup> <a name="messageRetentionPeriodInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriodInput"></a>

```typescript
public readonly messageRetentionPeriodInput: number;
```

- *Type:* number

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueNameInput"></a>

```typescript
public readonly queueNameInput: string;
```

- *Type:* string

---

##### `receiveMessageWaitTimeSecondsInput`<sup>Optional</sup> <a name="receiveMessageWaitTimeSecondsInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSecondsInput"></a>

```typescript
public readonly receiveMessageWaitTimeSecondsInput: number;
```

- *Type:* number

---

##### `redriveAllowPolicyInput`<sup>Optional</sup> <a name="redriveAllowPolicyInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicyInput"></a>

```typescript
public readonly redriveAllowPolicyInput: string;
```

- *Type:* string

---

##### `redrivePolicyInput`<sup>Optional</sup> <a name="redrivePolicyInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicyInput"></a>

```typescript
public readonly redrivePolicyInput: string;
```

- *Type:* string

---

##### `sqsManagedSseEnabledInput`<sup>Optional</sup> <a name="sqsManagedSseEnabledInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput"></a>

```typescript
public readonly sqsManagedSseEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SqsQueueTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]

---

##### `visibilityTimeoutInput`<sup>Optional</sup> <a name="visibilityTimeoutInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeoutInput"></a>

```typescript
public readonly visibilityTimeoutInput: number;
```

- *Type:* number

---

##### `contentBasedDeduplication`<sup>Required</sup> <a name="contentBasedDeduplication" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplication"></a>

```typescript
public readonly contentBasedDeduplication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deduplicationScope`<sup>Required</sup> <a name="deduplicationScope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScope"></a>

```typescript
public readonly deduplicationScope: string;
```

- *Type:* string

---

##### `delaySeconds`<sup>Required</sup> <a name="delaySeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySeconds"></a>

```typescript
public readonly delaySeconds: number;
```

- *Type:* number

---

##### `fifoQueue`<sup>Required</sup> <a name="fifoQueue" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueue"></a>

```typescript
public readonly fifoQueue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fifoThroughputLimit`<sup>Required</sup> <a name="fifoThroughputLimit" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimit"></a>

```typescript
public readonly fifoThroughputLimit: string;
```

- *Type:* string

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds"></a>

```typescript
public readonly kmsDataKeyReusePeriodSeconds: number;
```

- *Type:* number

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

##### `maximumMessageSize`<sup>Required</sup> <a name="maximumMessageSize" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSize"></a>

```typescript
public readonly maximumMessageSize: number;
```

- *Type:* number

---

##### `messageRetentionPeriod`<sup>Required</sup> <a name="messageRetentionPeriod" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriod"></a>

```typescript
public readonly messageRetentionPeriod: number;
```

- *Type:* number

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `receiveMessageWaitTimeSeconds`<sup>Required</sup> <a name="receiveMessageWaitTimeSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSeconds"></a>

```typescript
public readonly receiveMessageWaitTimeSeconds: number;
```

- *Type:* number

---

##### `redriveAllowPolicy`<sup>Required</sup> <a name="redriveAllowPolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicy"></a>

```typescript
public readonly redriveAllowPolicy: string;
```

- *Type:* string

---

##### `redrivePolicy`<sup>Required</sup> <a name="redrivePolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicy"></a>

```typescript
public readonly redrivePolicy: string;
```

- *Type:* string

---

##### `sqsManagedSseEnabled`<sup>Required</sup> <a name="sqsManagedSseEnabled" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabled"></a>

```typescript
public readonly sqsManagedSseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `visibilityTimeout`<sup>Required</sup> <a name="visibilityTimeout" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeout"></a>

```typescript
public readonly visibilityTimeout: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueConfig <a name="SqsQueueConfig" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.Initializer"></a>

```typescript
import { sqsQueue } from '@cdktn/provider-awscc'

const sqsQueueConfig: sqsQueue.SqsQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>boolean \| cdktn.IResolvable</code> | For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.deduplicationScope">deduplicationScope</a></code> | <code>string</code> | For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.delaySeconds">delaySeconds</a></code> | <code>number</code> | The time in seconds for which the delivery of all messages in the queue is delayed. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoQueue">fifoQueue</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, creates a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit">fifoThroughputLimit</a></code> | <code>string</code> | For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>number</code> | The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.maximumMessageSize">maximumMessageSize</a></code> | <code>number</code> | The limit of how many bytes that a message can contain before SQS rejects it. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.messageRetentionPeriod">messageRetentionPeriod</a></code> | <code>number</code> | The number of seconds that SQS retains a message. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.queueName">queueName</a></code> | <code>string</code> | A name for the queue. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.receiveMessageWaitTimeSeconds">receiveMessageWaitTimeSeconds</a></code> | <code>number</code> | Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy">redriveAllowPolicy</a></code> | <code>string</code> | The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redrivePolicy">redrivePolicy</a></code> | <code>string</code> | The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled">sqsManagedSseEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables server-side queue encryption using SQS owned encryption keys. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]</code> | The tags that you attach to this queue. For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *User Guide*. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.visibilityTimeout">visibilityTimeout</a></code> | <code>number</code> | The length of time during which a message will be unavailable after a message is delivered from the queue. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `contentBasedDeduplication`<sup>Optional</sup> <a name="contentBasedDeduplication" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication"></a>

```typescript
public readonly contentBasedDeduplication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication.

During the deduplication interval, SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message. For more information, see the ``ContentBasedDeduplication`` attribute for the ``CreateQueue`` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}

---

##### `deduplicationScope`<sup>Optional</sup> <a name="deduplicationScope" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.deduplicationScope"></a>

```typescript
public readonly deduplicationScope: string;
```

- *Type:* string

For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level.

Valid values are ``messageGroup`` and ``queue``.
 To enable high throughput for a FIFO queue, set this attribute to ``messageGroup``*and* set the ``FifoThroughputLimit`` attribute to ``perMessageGroupId``. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}

---

##### `delaySeconds`<sup>Optional</sup> <a name="delaySeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.delaySeconds"></a>

```typescript
public readonly delaySeconds: number;
```

- *Type:* number

The time in seconds for which the delivery of all messages in the queue is delayed.

You can specify an integer value of ``0`` to ``900`` (15 minutes). The default value is ``0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}

---

##### `fifoQueue`<sup>Optional</sup> <a name="fifoQueue" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoQueue"></a>

```typescript
public readonly fifoQueue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, creates a FIFO queue.

If you don't specify this property, SQS creates a standard queue. For more information, see [Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}

---

##### `fifoThroughputLimit`<sup>Optional</sup> <a name="fifoThroughputLimit" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit"></a>

```typescript
public readonly fifoThroughputLimit: string;
```

- *Type:* string

For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group.

Valid values are ``perQueue`` and ``perMessageGroupId``.
 To enable high throughput for a FIFO queue, set this attribute to ``perMessageGroupId``*and* set the ``DeduplicationScope`` attribute to ``messageGroup``. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds"></a>

```typescript
public readonly kmsDataKeyReusePeriodSeconds: number;
```

- *Type:* number

The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.

The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes).
  A shorter time period provides better security, but results in more calls to KMS, which might incur charges after Free Tier. For more information, see [Encryption at rest](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS.

To use the AWS managed KMS for SQS, specify a (default) alias ARN, alias name (for example ``alias/aws/sqs``), key ARN, or key ID. For more information, see the following:
  +  [Encryption at rest](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html) in the *Developer Guide*
  +  [CreateQueue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html) in the *API Reference*
  +  [Request Parameters](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters) in the *Key Management Service API Reference*
  +   The Key Management Service (KMS) section of the [Security best practices for Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/best-practices.html) in the *Key Management Service Developer Guide*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}

---

##### `maximumMessageSize`<sup>Optional</sup> <a name="maximumMessageSize" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.maximumMessageSize"></a>

```typescript
public readonly maximumMessageSize: number;
```

- *Type:* number

The limit of how many bytes that a message can contain before SQS rejects it.

You can specify an integer from 1,024 bytes (1 KiB) to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes (1 MiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#maximum_message_size SqsQueue#maximum_message_size}

---

##### `messageRetentionPeriod`<sup>Optional</sup> <a name="messageRetentionPeriod" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.messageRetentionPeriod"></a>

```typescript
public readonly messageRetentionPeriod: number;
```

- *Type:* number

The number of seconds that SQS retains a message.

You can specify an integer value from ``60`` seconds (1 minute) to ``1,209,600`` seconds (14 days). The default value is ``345,600`` seconds (4 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#message_retention_period SqsQueue#message_retention_period}

---

##### `queueName`<sup>Optional</sup> <a name="queueName" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

A name for the queue.

To create a FIFO queue, the name of your FIFO queue must end with the ``.fifo`` suffix. For more information, see [Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the *Developer Guide*.
 If you don't specify a name, CFN generates a unique physical ID and uses that ID for the queue name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) in the *User Guide*. 
  If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#queue_name SqsQueue#queue_name}

---

##### `receiveMessageWaitTimeSeconds`<sup>Optional</sup> <a name="receiveMessageWaitTimeSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.receiveMessageWaitTimeSeconds"></a>

```typescript
public readonly receiveMessageWaitTimeSeconds: number;
```

- *Type:* number

Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available.

You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property. For more information, see [Consuming messages using long polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html#sqs-long-polling) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#receive_message_wait_time_seconds SqsQueue#receive_message_wait_time_seconds}

---

##### `redriveAllowPolicy`<sup>Optional</sup> <a name="redriveAllowPolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy"></a>

```typescript
public readonly redriveAllowPolicy: string;
```

- *Type:* string

The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object.

The parameters are as follows:
  +  ``redrivePermission``: The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:
  +  ``allowAll``: (Default) Any source queues in this AWS account in the same Region can specify this queue as the dead-letter queue.
  +  ``denyAll``: No source queues can specify this queue as the dead-letter queue.
  +  ``byQueue``: Only queues specified by the ``sourceQueueArns`` parameter can specify this queue as the dead-letter queue.
  
  +  ``sourceQueueArns``: The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the ``redrivePermission`` parameter is set to ``byQueue``. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the ``redrivePermission`` parameter to ``allowAll``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}

---

##### `redrivePolicy`<sup>Optional</sup> <a name="redrivePolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redrivePolicy"></a>

```typescript
public readonly redrivePolicy: string;
```

- *Type:* string

The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object.

The parameters are as follows:
  +  ``deadLetterTargetArn``: The Amazon Resource Name (ARN) of the dead-letter queue to which SQS moves messages after the value of ``maxReceiveCount`` is exceeded.
  +  ``maxReceiveCount``: The number of times a message is received by a consumer of the source queue before being moved to the dead-letter queue. When the ``ReceiveCount`` for a message exceeds the ``maxReceiveCount`` for a queue, SQS moves the message to the dead-letter-queue.
  
  The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.
   *JSON* 
  ``{ "deadLetterTargetArn" : String, "maxReceiveCount" : Integer }`` 
  *YAML* 
  ``deadLetterTargetArn : String`` 
  ``maxReceiveCount : Integer``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}

---

##### `sqsManagedSseEnabled`<sup>Optional</sup> <a name="sqsManagedSseEnabled" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled"></a>

```typescript
public readonly sqsManagedSseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables server-side queue encryption using SQS owned encryption keys.

Only one server-side encryption option is supported per queue (for example, [SSE-KMS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or [SSE-SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)). When ``SqsManagedSseEnabled`` is not defined, ``SSE-SQS`` encryption is enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SqsQueueTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]

The tags that you attach to this queue. For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#tags SqsQueue#tags}

---

##### `visibilityTimeout`<sup>Optional</sup> <a name="visibilityTimeout" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.visibilityTimeout"></a>

```typescript
public readonly visibilityTimeout: number;
```

- *Type:* number

The length of time during which a message will be unavailable after a message is delivered from the queue.

This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.
 Values must be from 0 to 43,200 seconds (12 hours). If you don't specify a value, AWS CloudFormation uses the default value of 30 seconds.
 For more information about SQS queue visibility timeouts, see [Visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#visibility_timeout SqsQueue#visibility_timeout}

---

### SqsQueueTags <a name="SqsQueueTags" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags.Initializer"></a>

```typescript
import { sqsQueue } from '@cdktn/provider-awscc'

const sqsQueueTags: sqsQueue.SqsQueueTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#key SqsQueue#key}. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#value SqsQueue#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#key SqsQueue#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sqs_queue#value SqsQueue#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqsQueueTagsList <a name="SqsQueueTagsList" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer"></a>

```typescript
import { sqsQueue } from '@cdktn/provider-awscc'

new sqsQueue.SqsQueueTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.get"></a>

```typescript
public get(index: number): SqsQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqsQueueTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]

---


### SqsQueueTagsOutputReference <a name="SqsQueueTagsOutputReference" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer"></a>

```typescript
import { sqsQueue } from '@cdktn/provider-awscc'

new sqsQueue.SqsQueueTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqsQueueTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>

---



