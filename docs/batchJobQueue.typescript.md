# `batchJobQueue` Submodule <a name="`batchJobQueue` Submodule" id="@cdktn/provider-awscc.batchJobQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchJobQueue <a name="BatchJobQueue" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue awscc_batch_job_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

new batchJobQueue.BatchJobQueue(scope: Construct, id: string, config: BatchJobQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig">BatchJobQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig">BatchJobQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder">putComputeEnvironmentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putJobStateTimeLimitActions">putJobStateTimeLimitActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putServiceEnvironmentOrder">putServiceEnvironmentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetComputeEnvironmentOrder">resetComputeEnvironmentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobQueueName">resetJobQueueName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobQueueType">resetJobQueueType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobStateTimeLimitActions">resetJobStateTimeLimitActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetSchedulingPolicyArn">resetSchedulingPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetServiceEnvironmentOrder">resetServiceEnvironmentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputeEnvironmentOrder` <a name="putComputeEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder"></a>

```typescript
public putComputeEnvironmentOrder(value: IResolvable | BatchJobQueueComputeEnvironmentOrder[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>[]

---

##### `putJobStateTimeLimitActions` <a name="putJobStateTimeLimitActions" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putJobStateTimeLimitActions"></a>

```typescript
public putJobStateTimeLimitActions(value: IResolvable | BatchJobQueueJobStateTimeLimitActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putJobStateTimeLimitActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>[]

---

##### `putServiceEnvironmentOrder` <a name="putServiceEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putServiceEnvironmentOrder"></a>

```typescript
public putServiceEnvironmentOrder(value: IResolvable | BatchJobQueueServiceEnvironmentOrder[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putServiceEnvironmentOrder.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>[]

---

##### `resetComputeEnvironmentOrder` <a name="resetComputeEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetComputeEnvironmentOrder"></a>

```typescript
public resetComputeEnvironmentOrder(): void
```

##### `resetJobQueueName` <a name="resetJobQueueName" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobQueueName"></a>

```typescript
public resetJobQueueName(): void
```

##### `resetJobQueueType` <a name="resetJobQueueType" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobQueueType"></a>

```typescript
public resetJobQueueType(): void
```

##### `resetJobStateTimeLimitActions` <a name="resetJobStateTimeLimitActions" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobStateTimeLimitActions"></a>

```typescript
public resetJobStateTimeLimitActions(): void
```

##### `resetSchedulingPolicyArn` <a name="resetSchedulingPolicyArn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetSchedulingPolicyArn"></a>

```typescript
public resetSchedulingPolicyArn(): void
```

##### `resetServiceEnvironmentOrder` <a name="resetServiceEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetServiceEnvironmentOrder"></a>

```typescript
public resetServiceEnvironmentOrder(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BatchJobQueue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isConstruct"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

batchJobQueue.BatchJobQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformElement"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

batchJobQueue.BatchJobQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformResource"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

batchJobQueue.BatchJobQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

batchJobQueue.BatchJobQueue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BatchJobQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BatchJobQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BatchJobQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BatchJobQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrder">computeEnvironmentOrder</a></code> | <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList">BatchJobQueueComputeEnvironmentOrderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueArn">jobQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActions">jobStateTimeLimitActions</a></code> | <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList">BatchJobQueueJobStateTimeLimitActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.serviceEnvironmentOrder">serviceEnvironmentOrder</a></code> | <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList">BatchJobQueueServiceEnvironmentOrderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrderInput">computeEnvironmentOrderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueNameInput">jobQueueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueTypeInput">jobQueueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActionsInput">jobStateTimeLimitActionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.schedulingPolicyArnInput">schedulingPolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.serviceEnvironmentOrderInput">serviceEnvironmentOrderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueName">jobQueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueType">jobQueueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.schedulingPolicyArn">schedulingPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `computeEnvironmentOrder`<sup>Required</sup> <a name="computeEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrder"></a>

```typescript
public readonly computeEnvironmentOrder: BatchJobQueueComputeEnvironmentOrderList;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList">BatchJobQueueComputeEnvironmentOrderList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobQueueArn`<sup>Required</sup> <a name="jobQueueArn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueArn"></a>

```typescript
public readonly jobQueueArn: string;
```

- *Type:* string

---

##### `jobStateTimeLimitActions`<sup>Required</sup> <a name="jobStateTimeLimitActions" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActions"></a>

```typescript
public readonly jobStateTimeLimitActions: BatchJobQueueJobStateTimeLimitActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList">BatchJobQueueJobStateTimeLimitActionsList</a>

---

##### `serviceEnvironmentOrder`<sup>Required</sup> <a name="serviceEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.serviceEnvironmentOrder"></a>

```typescript
public readonly serviceEnvironmentOrder: BatchJobQueueServiceEnvironmentOrderList;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList">BatchJobQueueServiceEnvironmentOrderList</a>

---

##### `computeEnvironmentOrderInput`<sup>Optional</sup> <a name="computeEnvironmentOrderInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrderInput"></a>

```typescript
public readonly computeEnvironmentOrderInput: IResolvable | BatchJobQueueComputeEnvironmentOrder[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>[]

---

##### `jobQueueNameInput`<sup>Optional</sup> <a name="jobQueueNameInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueNameInput"></a>

```typescript
public readonly jobQueueNameInput: string;
```

- *Type:* string

---

##### `jobQueueTypeInput`<sup>Optional</sup> <a name="jobQueueTypeInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueTypeInput"></a>

```typescript
public readonly jobQueueTypeInput: string;
```

- *Type:* string

---

##### `jobStateTimeLimitActionsInput`<sup>Optional</sup> <a name="jobStateTimeLimitActionsInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActionsInput"></a>

```typescript
public readonly jobStateTimeLimitActionsInput: IResolvable | BatchJobQueueJobStateTimeLimitActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>[]

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `schedulingPolicyArnInput`<sup>Optional</sup> <a name="schedulingPolicyArnInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.schedulingPolicyArnInput"></a>

```typescript
public readonly schedulingPolicyArnInput: string;
```

- *Type:* string

---

##### `serviceEnvironmentOrderInput`<sup>Optional</sup> <a name="serviceEnvironmentOrderInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.serviceEnvironmentOrderInput"></a>

```typescript
public readonly serviceEnvironmentOrderInput: IResolvable | BatchJobQueueServiceEnvironmentOrder[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>[]

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `jobQueueName`<sup>Required</sup> <a name="jobQueueName" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueName"></a>

```typescript
public readonly jobQueueName: string;
```

- *Type:* string

---

##### `jobQueueType`<sup>Required</sup> <a name="jobQueueType" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueType"></a>

```typescript
public readonly jobQueueType: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `schedulingPolicyArn`<sup>Required</sup> <a name="schedulingPolicyArn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.schedulingPolicyArn"></a>

```typescript
public readonly schedulingPolicyArn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchJobQueueComputeEnvironmentOrder <a name="BatchJobQueueComputeEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.Initializer"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

const batchJobQueueComputeEnvironmentOrder: batchJobQueue.BatchJobQueueComputeEnvironmentOrder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.computeEnvironment">computeEnvironment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#compute_environment BatchJobQueue#compute_environment}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#order BatchJobQueue#order}. |

---

##### `computeEnvironment`<sup>Optional</sup> <a name="computeEnvironment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.computeEnvironment"></a>

```typescript
public readonly computeEnvironment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#compute_environment BatchJobQueue#compute_environment}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#order BatchJobQueue#order}.

---

### BatchJobQueueConfig <a name="BatchJobQueueConfig" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.Initializer"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

const batchJobQueueConfig: batchJobQueue.BatchJobQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.computeEnvironmentOrder">computeEnvironmentOrder</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#compute_environment_order BatchJobQueue#compute_environment_order}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobQueueName">jobQueueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#job_queue_name BatchJobQueue#job_queue_name}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobQueueType">jobQueueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#job_queue_type BatchJobQueue#job_queue_type}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobStateTimeLimitActions">jobStateTimeLimitActions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#job_state_time_limit_actions BatchJobQueue#job_state_time_limit_actions}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.schedulingPolicyArn">schedulingPolicyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.serviceEnvironmentOrder">serviceEnvironmentOrder</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#service_environment_order BatchJobQueue#service_environment_order}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#state BatchJobQueue#state}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}.

---

##### `computeEnvironmentOrder`<sup>Optional</sup> <a name="computeEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.computeEnvironmentOrder"></a>

```typescript
public readonly computeEnvironmentOrder: IResolvable | BatchJobQueueComputeEnvironmentOrder[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#compute_environment_order BatchJobQueue#compute_environment_order}.

---

##### `jobQueueName`<sup>Optional</sup> <a name="jobQueueName" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobQueueName"></a>

```typescript
public readonly jobQueueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#job_queue_name BatchJobQueue#job_queue_name}.

---

##### `jobQueueType`<sup>Optional</sup> <a name="jobQueueType" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobQueueType"></a>

```typescript
public readonly jobQueueType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#job_queue_type BatchJobQueue#job_queue_type}.

---

##### `jobStateTimeLimitActions`<sup>Optional</sup> <a name="jobStateTimeLimitActions" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobStateTimeLimitActions"></a>

```typescript
public readonly jobStateTimeLimitActions: IResolvable | BatchJobQueueJobStateTimeLimitActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#job_state_time_limit_actions BatchJobQueue#job_state_time_limit_actions}.

---

##### `schedulingPolicyArn`<sup>Optional</sup> <a name="schedulingPolicyArn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.schedulingPolicyArn"></a>

```typescript
public readonly schedulingPolicyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}.

---

##### `serviceEnvironmentOrder`<sup>Optional</sup> <a name="serviceEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.serviceEnvironmentOrder"></a>

```typescript
public readonly serviceEnvironmentOrder: IResolvable | BatchJobQueueServiceEnvironmentOrder[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#service_environment_order BatchJobQueue#service_environment_order}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#state BatchJobQueue#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}

---

### BatchJobQueueJobStateTimeLimitActions <a name="BatchJobQueueJobStateTimeLimitActions" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.Initializer"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

const batchJobQueueJobStateTimeLimitActions: batchJobQueue.BatchJobQueueJobStateTimeLimitActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#action BatchJobQueue#action}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.maxTimeSeconds">maxTimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#max_time_seconds BatchJobQueue#max_time_seconds}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.reason">reason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#reason BatchJobQueue#reason}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#state BatchJobQueue#state}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#action BatchJobQueue#action}.

---

##### `maxTimeSeconds`<sup>Optional</sup> <a name="maxTimeSeconds" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.maxTimeSeconds"></a>

```typescript
public readonly maxTimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#max_time_seconds BatchJobQueue#max_time_seconds}.

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#reason BatchJobQueue#reason}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#state BatchJobQueue#state}.

---

### BatchJobQueueServiceEnvironmentOrder <a name="BatchJobQueueServiceEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder.Initializer"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

const batchJobQueueServiceEnvironmentOrder: batchJobQueue.BatchJobQueueServiceEnvironmentOrder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#order BatchJobQueue#order}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder.property.serviceEnvironment">serviceEnvironment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#service_environment BatchJobQueue#service_environment}. |

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#order BatchJobQueue#order}.

---

##### `serviceEnvironment`<sup>Optional</sup> <a name="serviceEnvironment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder.property.serviceEnvironment"></a>

```typescript
public readonly serviceEnvironment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_job_queue#service_environment BatchJobQueue#service_environment}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchJobQueueComputeEnvironmentOrderList <a name="BatchJobQueueComputeEnvironmentOrderList" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

new batchJobQueue.BatchJobQueueComputeEnvironmentOrderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get"></a>

```typescript
public get(index: number): BatchJobQueueComputeEnvironmentOrderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobQueueComputeEnvironmentOrder[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>[]

---


### BatchJobQueueComputeEnvironmentOrderOutputReference <a name="BatchJobQueueComputeEnvironmentOrderOutputReference" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

new batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resetComputeEnvironment">resetComputeEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeEnvironment` <a name="resetComputeEnvironment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resetComputeEnvironment"></a>

```typescript
public resetComputeEnvironment(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironmentInput">computeEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment">computeEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeEnvironmentInput`<sup>Optional</sup> <a name="computeEnvironmentInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironmentInput"></a>

```typescript
public readonly computeEnvironmentInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `computeEnvironment`<sup>Required</sup> <a name="computeEnvironment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment"></a>

```typescript
public readonly computeEnvironment: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobQueueComputeEnvironmentOrder;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>

---


### BatchJobQueueJobStateTimeLimitActionsList <a name="BatchJobQueueJobStateTimeLimitActionsList" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

new batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.get"></a>

```typescript
public get(index: number): BatchJobQueueJobStateTimeLimitActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobQueueJobStateTimeLimitActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>[]

---


### BatchJobQueueJobStateTimeLimitActionsOutputReference <a name="BatchJobQueueJobStateTimeLimitActionsOutputReference" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

new batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetMaxTimeSeconds">resetMaxTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetReason">resetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetMaxTimeSeconds` <a name="resetMaxTimeSeconds" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetMaxTimeSeconds"></a>

```typescript
public resetMaxTimeSeconds(): void
```

##### `resetReason` <a name="resetReason" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetReason"></a>

```typescript
public resetReason(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.maxTimeSecondsInput">maxTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.reasonInput">reasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.maxTimeSeconds">maxTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `maxTimeSecondsInput`<sup>Optional</sup> <a name="maxTimeSecondsInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.maxTimeSecondsInput"></a>

```typescript
public readonly maxTimeSecondsInput: number;
```

- *Type:* number

---

##### `reasonInput`<sup>Optional</sup> <a name="reasonInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.reasonInput"></a>

```typescript
public readonly reasonInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `maxTimeSeconds`<sup>Required</sup> <a name="maxTimeSeconds" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.maxTimeSeconds"></a>

```typescript
public readonly maxTimeSeconds: number;
```

- *Type:* number

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobQueueJobStateTimeLimitActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>

---


### BatchJobQueueServiceEnvironmentOrderList <a name="BatchJobQueueServiceEnvironmentOrderList" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

new batchJobQueue.BatchJobQueueServiceEnvironmentOrderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.get"></a>

```typescript
public get(index: number): BatchJobQueueServiceEnvironmentOrderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobQueueServiceEnvironmentOrder[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>[]

---


### BatchJobQueueServiceEnvironmentOrderOutputReference <a name="BatchJobQueueServiceEnvironmentOrderOutputReference" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer"></a>

```typescript
import { batchJobQueue } from '@cdktn/provider-awscc'

new batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resetServiceEnvironment">resetServiceEnvironment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetServiceEnvironment` <a name="resetServiceEnvironment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resetServiceEnvironment"></a>

```typescript
public resetServiceEnvironment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.serviceEnvironmentInput">serviceEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.serviceEnvironment">serviceEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `serviceEnvironmentInput`<sup>Optional</sup> <a name="serviceEnvironmentInput" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.serviceEnvironmentInput"></a>

```typescript
public readonly serviceEnvironmentInput: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `serviceEnvironment`<sup>Required</sup> <a name="serviceEnvironment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.serviceEnvironment"></a>

```typescript
public readonly serviceEnvironment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobQueueServiceEnvironmentOrder;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>

---



