# `kinesisStream` Submodule <a name="`kinesisStream` Submodule" id="@cdktn/provider-awscc.kinesisStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisStream <a name="KinesisStream" id="@cdktn/provider-awscc.kinesisStream.KinesisStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream awscc_kinesis_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

new kinesisStream.KinesisStream(scope: Construct, id: string, config?: KinesisStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig">KinesisStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig">KinesisStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamEncryption">putStreamEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamModeDetails">putStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetDesiredShardLevelMetrics">resetDesiredShardLevelMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetMaxRecordSizeInKiB">resetMaxRecordSizeInKiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetRetentionPeriodHours">resetRetentionPeriodHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetShardCount">resetShardCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetStreamEncryption">resetStreamEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetStreamModeDetails">resetStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetWarmThroughputMiBps">resetWarmThroughputMiBps</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStreamEncryption` <a name="putStreamEncryption" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamEncryption"></a>

```typescript
public putStreamEncryption(value: KinesisStreamStreamEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption">KinesisStreamStreamEncryption</a>

---

##### `putStreamModeDetails` <a name="putStreamModeDetails" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamModeDetails"></a>

```typescript
public putStreamModeDetails(value: KinesisStreamStreamModeDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamModeDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putTags"></a>

```typescript
public putTags(value: IResolvable | KinesisStreamTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags">KinesisStreamTags</a>[]

---

##### `resetDesiredShardLevelMetrics` <a name="resetDesiredShardLevelMetrics" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetDesiredShardLevelMetrics"></a>

```typescript
public resetDesiredShardLevelMetrics(): void
```

##### `resetMaxRecordSizeInKiB` <a name="resetMaxRecordSizeInKiB" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetMaxRecordSizeInKiB"></a>

```typescript
public resetMaxRecordSizeInKiB(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRetentionPeriodHours` <a name="resetRetentionPeriodHours" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetRetentionPeriodHours"></a>

```typescript
public resetRetentionPeriodHours(): void
```

##### `resetShardCount` <a name="resetShardCount" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetShardCount"></a>

```typescript
public resetShardCount(): void
```

##### `resetStreamEncryption` <a name="resetStreamEncryption" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetStreamEncryption"></a>

```typescript
public resetStreamEncryption(): void
```

##### `resetStreamModeDetails` <a name="resetStreamModeDetails" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetStreamModeDetails"></a>

```typescript
public resetStreamModeDetails(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWarmThroughputMiBps` <a name="resetWarmThroughputMiBps" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetWarmThroughputMiBps"></a>

```typescript
public resetWarmThroughputMiBps(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isConstruct"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

kinesisStream.KinesisStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformElement"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

kinesisStream.KinesisStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformResource"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

kinesisStream.KinesisStream.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

kinesisStream.KinesisStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KinesisStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KinesisStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KinesisStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KinesisStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamEncryption">streamEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference">KinesisStreamStreamEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamModeDetails">streamModeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference">KinesisStreamStreamModeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList">KinesisStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputObject">warmThroughputObject</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference">KinesisStreamWarmThroughputObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.desiredShardLevelMetricsInput">desiredShardLevelMetricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.maxRecordSizeInKiBInput">maxRecordSizeInKiBInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.retentionPeriodHoursInput">retentionPeriodHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.shardCountInput">shardCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamEncryptionInput">streamEncryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption">KinesisStreamStreamEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamModeDetailsInput">streamModeDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags">KinesisStreamTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputMiBpsInput">warmThroughputMiBpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.desiredShardLevelMetrics">desiredShardLevelMetrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.maxRecordSizeInKiB">maxRecordSizeInKiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.shardCount">shardCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputMiBps">warmThroughputMiBps</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `streamEncryption`<sup>Required</sup> <a name="streamEncryption" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamEncryption"></a>

```typescript
public readonly streamEncryption: KinesisStreamStreamEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference">KinesisStreamStreamEncryptionOutputReference</a>

---

##### `streamModeDetails`<sup>Required</sup> <a name="streamModeDetails" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamModeDetails"></a>

```typescript
public readonly streamModeDetails: KinesisStreamStreamModeDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference">KinesisStreamStreamModeDetailsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tags"></a>

```typescript
public readonly tags: KinesisStreamTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList">KinesisStreamTagsList</a>

---

##### `warmThroughputObject`<sup>Required</sup> <a name="warmThroughputObject" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputObject"></a>

```typescript
public readonly warmThroughputObject: KinesisStreamWarmThroughputObjectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference">KinesisStreamWarmThroughputObjectOutputReference</a>

---

##### `desiredShardLevelMetricsInput`<sup>Optional</sup> <a name="desiredShardLevelMetricsInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.desiredShardLevelMetricsInput"></a>

```typescript
public readonly desiredShardLevelMetricsInput: string[];
```

- *Type:* string[]

---

##### `maxRecordSizeInKiBInput`<sup>Optional</sup> <a name="maxRecordSizeInKiBInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.maxRecordSizeInKiBInput"></a>

```typescript
public readonly maxRecordSizeInKiBInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retentionPeriodHoursInput`<sup>Optional</sup> <a name="retentionPeriodHoursInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.retentionPeriodHoursInput"></a>

```typescript
public readonly retentionPeriodHoursInput: number;
```

- *Type:* number

---

##### `shardCountInput`<sup>Optional</sup> <a name="shardCountInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.shardCountInput"></a>

```typescript
public readonly shardCountInput: number;
```

- *Type:* number

---

##### `streamEncryptionInput`<sup>Optional</sup> <a name="streamEncryptionInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamEncryptionInput"></a>

```typescript
public readonly streamEncryptionInput: IResolvable | KinesisStreamStreamEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption">KinesisStreamStreamEncryption</a>

---

##### `streamModeDetailsInput`<sup>Optional</sup> <a name="streamModeDetailsInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamModeDetailsInput"></a>

```typescript
public readonly streamModeDetailsInput: IResolvable | KinesisStreamStreamModeDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | KinesisStreamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags">KinesisStreamTags</a>[]

---

##### `warmThroughputMiBpsInput`<sup>Optional</sup> <a name="warmThroughputMiBpsInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputMiBpsInput"></a>

```typescript
public readonly warmThroughputMiBpsInput: number;
```

- *Type:* number

---

##### `desiredShardLevelMetrics`<sup>Required</sup> <a name="desiredShardLevelMetrics" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.desiredShardLevelMetrics"></a>

```typescript
public readonly desiredShardLevelMetrics: string[];
```

- *Type:* string[]

---

##### `maxRecordSizeInKiB`<sup>Required</sup> <a name="maxRecordSizeInKiB" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.maxRecordSizeInKiB"></a>

```typescript
public readonly maxRecordSizeInKiB: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="retentionPeriodHours" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.retentionPeriodHours"></a>

```typescript
public readonly retentionPeriodHours: number;
```

- *Type:* number

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.shardCount"></a>

```typescript
public readonly shardCount: number;
```

- *Type:* number

---

##### `warmThroughputMiBps`<sup>Required</sup> <a name="warmThroughputMiBps" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputMiBps"></a>

```typescript
public readonly warmThroughputMiBps: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisStreamConfig <a name="KinesisStreamConfig" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.Initializer"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

const kinesisStreamConfig: kinesisStream.KinesisStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.desiredShardLevelMetrics">desiredShardLevelMetrics</a></code> | <code>string[]</code> | The final list of shard-level metrics. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.maxRecordSizeInKiB">maxRecordSizeInKiB</a></code> | <code>number</code> | Maximum size of a data record in KiB allowed to be put into Kinesis stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.name">name</a></code> | <code>string</code> | The name of the Kinesis stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>number</code> | The number of hours for the data records that are stored in shards to remain accessible. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.shardCount">shardCount</a></code> | <code>number</code> | The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.streamEncryption">streamEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption">KinesisStreamStreamEncryption</a></code> | When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.streamModeDetails">streamModeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | The mode in which the stream is running. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags">KinesisStreamTags</a>[]</code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.warmThroughputMiBps">warmThroughputMiBps</a></code> | <code>number</code> | Target warm throughput in MiB/s for the stream. This property can ONLY be set when StreamMode is ON_DEMAND. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `desiredShardLevelMetrics`<sup>Optional</sup> <a name="desiredShardLevelMetrics" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.desiredShardLevelMetrics"></a>

```typescript
public readonly desiredShardLevelMetrics: string[];
```

- *Type:* string[]

The final list of shard-level metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#desired_shard_level_metrics KinesisStream#desired_shard_level_metrics}

---

##### `maxRecordSizeInKiB`<sup>Optional</sup> <a name="maxRecordSizeInKiB" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.maxRecordSizeInKiB"></a>

```typescript
public readonly maxRecordSizeInKiB: number;
```

- *Type:* number

Maximum size of a data record in KiB allowed to be put into Kinesis stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#max_record_size_in_ki_b KinesisStream#max_record_size_in_ki_b}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Kinesis stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#name KinesisStream#name}

---

##### `retentionPeriodHours`<sup>Optional</sup> <a name="retentionPeriodHours" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.retentionPeriodHours"></a>

```typescript
public readonly retentionPeriodHours: number;
```

- *Type:* number

The number of hours for the data records that are stored in shards to remain accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#retention_period_hours KinesisStream#retention_period_hours}

---

##### `shardCount`<sup>Optional</sup> <a name="shardCount" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.shardCount"></a>

```typescript
public readonly shardCount: number;
```

- *Type:* number

The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#shard_count KinesisStream#shard_count}

---

##### `streamEncryption`<sup>Optional</sup> <a name="streamEncryption" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.streamEncryption"></a>

```typescript
public readonly streamEncryption: KinesisStreamStreamEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption">KinesisStreamStreamEncryption</a>

When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#stream_encryption KinesisStream#stream_encryption}

---

##### `streamModeDetails`<sup>Optional</sup> <a name="streamModeDetails" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.streamModeDetails"></a>

```typescript
public readonly streamModeDetails: KinesisStreamStreamModeDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

The mode in which the stream is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#stream_mode_details KinesisStream#stream_mode_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | KinesisStreamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags">KinesisStreamTags</a>[]

An arbitrary set of tags (key-value pairs) to associate with the Kinesis stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#tags KinesisStream#tags}

---

##### `warmThroughputMiBps`<sup>Optional</sup> <a name="warmThroughputMiBps" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.warmThroughputMiBps"></a>

```typescript
public readonly warmThroughputMiBps: number;
```

- *Type:* number

Target warm throughput in MiB/s for the stream. This property can ONLY be set when StreamMode is ON_DEMAND.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#warm_throughput_mi_bps KinesisStream#warm_throughput_mi_bps}

---

### KinesisStreamStreamEncryption <a name="KinesisStreamStreamEncryption" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption.Initializer"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

const kinesisStreamStreamEncryption: kinesisStream.KinesisStreamStreamEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption.property.encryptionType">encryptionType</a></code> | <code>string</code> | The encryption type to use. The only valid value is KMS. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption.property.keyId">keyId</a></code> | <code>string</code> | The GUID for the customer-managed AWS KMS key to use for encryption. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

The encryption type to use. The only valid value is KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#encryption_type KinesisStream#encryption_type}

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The GUID for the customer-managed AWS KMS key to use for encryption.

This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#key_id KinesisStream#key_id}

---

### KinesisStreamStreamModeDetails <a name="KinesisStreamStreamModeDetails" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails.Initializer"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

const kinesisStreamStreamModeDetails: kinesisStream.KinesisStreamStreamModeDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails.property.streamMode">streamMode</a></code> | <code>string</code> | The mode of the stream. |

---

##### `streamMode`<sup>Optional</sup> <a name="streamMode" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails.property.streamMode"></a>

```typescript
public readonly streamMode: string;
```

- *Type:* string

The mode of the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#stream_mode KinesisStream#stream_mode}

---

### KinesisStreamTags <a name="KinesisStreamTags" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTags.Initializer"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

const kinesisStreamTags: kinesisStream.KinesisStreamTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#key KinesisStream#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesis_stream#value KinesisStream#value}

---

### KinesisStreamWarmThroughputObject <a name="KinesisStreamWarmThroughputObject" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObject.Initializer"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

const kinesisStreamWarmThroughputObject: kinesisStream.KinesisStreamWarmThroughputObject = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### KinesisStreamStreamEncryptionOutputReference <a name="KinesisStreamStreamEncryptionOutputReference" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.Initializer"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

new kinesisStream.KinesisStreamStreamEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption">KinesisStreamStreamEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisStreamStreamEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption">KinesisStreamStreamEncryption</a>

---


### KinesisStreamStreamModeDetailsOutputReference <a name="KinesisStreamStreamModeDetailsOutputReference" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

new kinesisStream.KinesisStreamStreamModeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resetStreamMode">resetStreamMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStreamMode` <a name="resetStreamMode" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resetStreamMode"></a>

```typescript
public resetStreamMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamModeInput">streamModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamMode">streamMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `streamModeInput`<sup>Optional</sup> <a name="streamModeInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamModeInput"></a>

```typescript
public readonly streamModeInput: string;
```

- *Type:* string

---

##### `streamMode`<sup>Required</sup> <a name="streamMode" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamMode"></a>

```typescript
public readonly streamMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisStreamStreamModeDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---


### KinesisStreamTagsList <a name="KinesisStreamTagsList" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

new kinesisStream.KinesisStreamTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.get"></a>

```typescript
public get(index: number): KinesisStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags">KinesisStreamTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisStreamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags">KinesisStreamTags</a>[]

---


### KinesisStreamTagsOutputReference <a name="KinesisStreamTagsOutputReference" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

new kinesisStream.KinesisStreamTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags">KinesisStreamTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisStreamTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags">KinesisStreamTags</a>

---


### KinesisStreamWarmThroughputObjectOutputReference <a name="KinesisStreamWarmThroughputObjectOutputReference" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.Initializer"></a>

```typescript
import { kinesisStream } from '@cdktn/provider-awscc'

new kinesisStream.KinesisStreamWarmThroughputObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.currentMiBps">currentMiBps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.targetMiBps">targetMiBps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObject">KinesisStreamWarmThroughputObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentMiBps`<sup>Required</sup> <a name="currentMiBps" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.currentMiBps"></a>

```typescript
public readonly currentMiBps: number;
```

- *Type:* number

---

##### `targetMiBps`<sup>Required</sup> <a name="targetMiBps" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.targetMiBps"></a>

```typescript
public readonly targetMiBps: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisStreamWarmThroughputObject;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObject">KinesisStreamWarmThroughputObject</a>

---



