# `lookoutequipmentInferenceScheduler` Submodule <a name="`lookoutequipmentInferenceScheduler` Submodule" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookoutequipmentInferenceScheduler <a name="LookoutequipmentInferenceScheduler" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler awscc_lookoutequipment_inference_scheduler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler(scope: Construct, id: string, config: LookoutequipmentInferenceSchedulerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig">LookoutequipmentInferenceSchedulerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig">LookoutequipmentInferenceSchedulerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration">putDataInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration">putDataOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetDataDelayOffsetInMinutes">resetDataDelayOffsetInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetInferenceSchedulerName">resetInferenceSchedulerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetServerSideKmsKeyId">resetServerSideKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataInputConfiguration` <a name="putDataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration"></a>

```typescript
public putDataInputConfiguration(value: LookoutequipmentInferenceSchedulerDataInputConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---

##### `putDataOutputConfiguration` <a name="putDataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration"></a>

```typescript
public putDataOutputConfiguration(value: LookoutequipmentInferenceSchedulerDataOutputConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags"></a>

```typescript
public putTags(value: IResolvable | LookoutequipmentInferenceSchedulerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]

---

##### `resetDataDelayOffsetInMinutes` <a name="resetDataDelayOffsetInMinutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetDataDelayOffsetInMinutes"></a>

```typescript
public resetDataDelayOffsetInMinutes(): void
```

##### `resetInferenceSchedulerName` <a name="resetInferenceSchedulerName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetInferenceSchedulerName"></a>

```typescript
public resetInferenceSchedulerName(): void
```

##### `resetServerSideKmsKeyId` <a name="resetServerSideKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetServerSideKmsKeyId"></a>

```typescript
public resetServerSideKmsKeyId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LookoutequipmentInferenceScheduler to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LookoutequipmentInferenceScheduler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LookoutequipmentInferenceScheduler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfiguration">dataInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfiguration">dataOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerArn">inferenceSchedulerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList">LookoutequipmentInferenceSchedulerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutesInput">dataDelayOffsetInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfigurationInput">dataInputConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfigurationInput">dataOutputConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequencyInput">dataUploadFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerNameInput">inferenceSchedulerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelNameInput">modelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyIdInput">serverSideKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes">dataDelayOffsetInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequency">dataUploadFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerName">inferenceSchedulerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyId">serverSideKmsKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataInputConfiguration`<sup>Required</sup> <a name="dataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfiguration"></a>

```typescript
public readonly dataInputConfiguration: LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a>

---

##### `dataOutputConfiguration`<sup>Required</sup> <a name="dataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfiguration"></a>

```typescript
public readonly dataOutputConfiguration: LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inferenceSchedulerArn`<sup>Required</sup> <a name="inferenceSchedulerArn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerArn"></a>

```typescript
public readonly inferenceSchedulerArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tags"></a>

```typescript
public readonly tags: LookoutequipmentInferenceSchedulerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList">LookoutequipmentInferenceSchedulerTagsList</a>

---

##### `dataDelayOffsetInMinutesInput`<sup>Optional</sup> <a name="dataDelayOffsetInMinutesInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutesInput"></a>

```typescript
public readonly dataDelayOffsetInMinutesInput: number;
```

- *Type:* number

---

##### `dataInputConfigurationInput`<sup>Optional</sup> <a name="dataInputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfigurationInput"></a>

```typescript
public readonly dataInputConfigurationInput: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---

##### `dataOutputConfigurationInput`<sup>Optional</sup> <a name="dataOutputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfigurationInput"></a>

```typescript
public readonly dataOutputConfigurationInput: IResolvable | LookoutequipmentInferenceSchedulerDataOutputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---

##### `dataUploadFrequencyInput`<sup>Optional</sup> <a name="dataUploadFrequencyInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequencyInput"></a>

```typescript
public readonly dataUploadFrequencyInput: string;
```

- *Type:* string

---

##### `inferenceSchedulerNameInput`<sup>Optional</sup> <a name="inferenceSchedulerNameInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerNameInput"></a>

```typescript
public readonly inferenceSchedulerNameInput: string;
```

- *Type:* string

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelNameInput"></a>

```typescript
public readonly modelNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `serverSideKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideKmsKeyIdInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyIdInput"></a>

```typescript
public readonly serverSideKmsKeyIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LookoutequipmentInferenceSchedulerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]

---

##### `dataDelayOffsetInMinutes`<sup>Required</sup> <a name="dataDelayOffsetInMinutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes"></a>

```typescript
public readonly dataDelayOffsetInMinutes: number;
```

- *Type:* number

---

##### `dataUploadFrequency`<sup>Required</sup> <a name="dataUploadFrequency" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequency"></a>

```typescript
public readonly dataUploadFrequency: string;
```

- *Type:* string

---

##### `inferenceSchedulerName`<sup>Required</sup> <a name="inferenceSchedulerName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerName"></a>

```typescript
public readonly inferenceSchedulerName: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `serverSideKmsKeyId`<sup>Required</sup> <a name="serverSideKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyId"></a>

```typescript
public readonly serverSideKmsKeyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LookoutequipmentInferenceSchedulerConfig <a name="LookoutequipmentInferenceSchedulerConfig" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const lookoutequipmentInferenceSchedulerConfig: lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataInputConfiguration">dataInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataOutputConfiguration">dataOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataUploadFrequency">dataUploadFrequency</a></code> | <code>string</code> | How often data is uploaded to the source S3 bucket for the input data. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.modelName">modelName</a></code> | <code>string</code> | The name of the previously trained ML model being used to create the inference scheduler. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataDelayOffsetInMinutes">dataDelayOffsetInMinutes</a></code> | <code>number</code> | A period of time (in minutes) by which inference on the data is delayed after the data starts. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.inferenceSchedulerName">inferenceSchedulerName</a></code> | <code>string</code> | The name of the inference scheduler being created. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.serverSideKmsKeyId">serverSideKmsKeyId</a></code> | <code>string</code> | Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]</code> | Any tags associated with the inference scheduler. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataInputConfiguration`<sup>Required</sup> <a name="dataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataInputConfiguration"></a>

```typescript
public readonly dataInputConfiguration: LookoutequipmentInferenceSchedulerDataInputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_input_configuration LookoutequipmentInferenceScheduler#data_input_configuration}

---

##### `dataOutputConfiguration`<sup>Required</sup> <a name="dataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataOutputConfiguration"></a>

```typescript
public readonly dataOutputConfiguration: LookoutequipmentInferenceSchedulerDataOutputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_output_configuration LookoutequipmentInferenceScheduler#data_output_configuration}

---

##### `dataUploadFrequency`<sup>Required</sup> <a name="dataUploadFrequency" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataUploadFrequency"></a>

```typescript
public readonly dataUploadFrequency: string;
```

- *Type:* string

How often data is uploaded to the source S3 bucket for the input data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_upload_frequency LookoutequipmentInferenceScheduler#data_upload_frequency}

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The name of the previously trained ML model being used to create the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#model_name LookoutequipmentInferenceScheduler#model_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#role_arn LookoutequipmentInferenceScheduler#role_arn}

---

##### `dataDelayOffsetInMinutes`<sup>Optional</sup> <a name="dataDelayOffsetInMinutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataDelayOffsetInMinutes"></a>

```typescript
public readonly dataDelayOffsetInMinutes: number;
```

- *Type:* number

A period of time (in minutes) by which inference on the data is delayed after the data starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_delay_offset_in_minutes LookoutequipmentInferenceScheduler#data_delay_offset_in_minutes}

---

##### `inferenceSchedulerName`<sup>Optional</sup> <a name="inferenceSchedulerName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.inferenceSchedulerName"></a>

```typescript
public readonly inferenceSchedulerName: string;
```

- *Type:* string

The name of the inference scheduler being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#inference_scheduler_name LookoutequipmentInferenceScheduler#inference_scheduler_name}

---

##### `serverSideKmsKeyId`<sup>Optional</sup> <a name="serverSideKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.serverSideKmsKeyId"></a>

```typescript
public readonly serverSideKmsKeyId: string;
```

- *Type:* string

Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#server_side_kms_key_id LookoutequipmentInferenceScheduler#server_side_kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LookoutequipmentInferenceSchedulerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]

Any tags associated with the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#tags LookoutequipmentInferenceScheduler#tags}

---

### LookoutequipmentInferenceSchedulerDataInputConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const lookoutequipmentInferenceSchedulerDataInputConfiguration: lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.s3InputConfiguration">s3InputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | Specifies configuration information for the input data for the inference, including input data S3 location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inferenceInputNameConfiguration">inferenceInputNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | Specifies configuration information for the input data for the inference, including timestamp format and delimiter. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inputTimeZoneOffset">inputTimeZoneOffset</a></code> | <code>string</code> | Indicates the difference between your time zone and Greenwich Mean Time (GMT). |

---

##### `s3InputConfiguration`<sup>Required</sup> <a name="s3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.s3InputConfiguration"></a>

```typescript
public readonly s3InputConfiguration: LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

Specifies configuration information for the input data for the inference, including input data S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#s3_input_configuration LookoutequipmentInferenceScheduler#s3_input_configuration}

---

##### `inferenceInputNameConfiguration`<sup>Optional</sup> <a name="inferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inferenceInputNameConfiguration"></a>

```typescript
public readonly inferenceInputNameConfiguration: LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

Specifies configuration information for the input data for the inference, including timestamp format and delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#inference_input_name_configuration LookoutequipmentInferenceScheduler#inference_input_name_configuration}

---

##### `inputTimeZoneOffset`<sup>Optional</sup> <a name="inputTimeZoneOffset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inputTimeZoneOffset"></a>

```typescript
public readonly inputTimeZoneOffset: string;
```

- *Type:* string

Indicates the difference between your time zone and Greenwich Mean Time (GMT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#input_time_zone_offset LookoutequipmentInferenceScheduler#input_time_zone_offset}

---

### LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const lookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration: lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.componentTimestampDelimiter">componentTimestampDelimiter</a></code> | <code>string</code> | Indicates the delimiter character used between items in the data. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-). |

---

##### `componentTimestampDelimiter`<sup>Optional</sup> <a name="componentTimestampDelimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.componentTimestampDelimiter"></a>

```typescript
public readonly componentTimestampDelimiter: string;
```

- *Type:* string

Indicates the delimiter character used between items in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#component_timestamp_delimiter LookoutequipmentInferenceScheduler#component_timestamp_delimiter}

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#timestamp_format LookoutequipmentInferenceScheduler#timestamp_format}

---

### LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const lookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration: lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}.

---

### LookoutequipmentInferenceSchedulerDataOutputConfiguration <a name="LookoutequipmentInferenceSchedulerDataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const lookoutequipmentInferenceSchedulerDataOutputConfiguration: lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.s3OutputConfiguration">s3OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | Specifies configuration information for the output results from the inference, including output S3 location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The ID number for the AWS KMS key used to encrypt the inference output. |

---

##### `s3OutputConfiguration`<sup>Required</sup> <a name="s3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.s3OutputConfiguration"></a>

```typescript
public readonly s3OutputConfiguration: LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

Specifies configuration information for the output results from the inference, including output S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#s3_output_configuration LookoutequipmentInferenceScheduler#s3_output_configuration}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The ID number for the AWS KMS key used to encrypt the inference output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#kms_key_id LookoutequipmentInferenceScheduler#kms_key_id}

---

### LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const lookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration: lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}.

---

### LookoutequipmentInferenceSchedulerTags <a name="LookoutequipmentInferenceSchedulerTags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const lookoutequipmentInferenceSchedulerTags: lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.key">key</a></code> | <code>string</code> | The key for the specified tag. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.value">value</a></code> | <code>string</code> | The value for the specified tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#key LookoutequipmentInferenceScheduler#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#value LookoutequipmentInferenceScheduler#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetComponentTimestampDelimiter">resetComponentTimestampDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComponentTimestampDelimiter` <a name="resetComponentTimestampDelimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetComponentTimestampDelimiter"></a>

```typescript
public resetComponentTimestampDelimiter(): void
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiterInput">componentTimestampDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter">componentTimestampDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentTimestampDelimiterInput`<sup>Optional</sup> <a name="componentTimestampDelimiterInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiterInput"></a>

```typescript
public readonly componentTimestampDelimiterInput: string;
```

- *Type:* string

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormatInput"></a>

```typescript
public readonly timestampFormatInput: string;
```

- *Type:* string

---

##### `componentTimestampDelimiter`<sup>Required</sup> <a name="componentTimestampDelimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter"></a>

```typescript
public readonly componentTimestampDelimiter: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration">putInferenceInputNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration">putS3InputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInferenceInputNameConfiguration">resetInferenceInputNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInputTimeZoneOffset">resetInputTimeZoneOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInferenceInputNameConfiguration` <a name="putInferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration"></a>

```typescript
public putInferenceInputNameConfiguration(value: LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---

##### `putS3InputConfiguration` <a name="putS3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration"></a>

```typescript
public putS3InputConfiguration(value: LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---

##### `resetInferenceInputNameConfiguration` <a name="resetInferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInferenceInputNameConfiguration"></a>

```typescript
public resetInferenceInputNameConfiguration(): void
```

##### `resetInputTimeZoneOffset` <a name="resetInputTimeZoneOffset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInputTimeZoneOffset"></a>

```typescript
public resetInputTimeZoneOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration">inferenceInputNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration">s3InputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfigurationInput">inferenceInputNameConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffsetInput">inputTimeZoneOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfigurationInput">s3InputConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset">inputTimeZoneOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inferenceInputNameConfiguration`<sup>Required</sup> <a name="inferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration"></a>

```typescript
public readonly inferenceInputNameConfiguration: LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a>

---

##### `s3InputConfiguration`<sup>Required</sup> <a name="s3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration"></a>

```typescript
public readonly s3InputConfiguration: LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a>

---

##### `inferenceInputNameConfigurationInput`<sup>Optional</sup> <a name="inferenceInputNameConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfigurationInput"></a>

```typescript
public readonly inferenceInputNameConfigurationInput: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---

##### `inputTimeZoneOffsetInput`<sup>Optional</sup> <a name="inputTimeZoneOffsetInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffsetInput"></a>

```typescript
public readonly inputTimeZoneOffsetInput: string;
```

- *Type:* string

---

##### `s3InputConfigurationInput`<sup>Optional</sup> <a name="s3InputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfigurationInput"></a>

```typescript
public readonly s3InputConfigurationInput: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---

##### `inputTimeZoneOffset`<sup>Required</sup> <a name="inputTimeZoneOffset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset"></a>

```typescript
public readonly inputTimeZoneOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration">putS3OutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3OutputConfiguration` <a name="putS3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration"></a>

```typescript
public putS3OutputConfiguration(value: LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration">s3OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfigurationInput">s3OutputConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3OutputConfiguration`<sup>Required</sup> <a name="s3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration"></a>

```typescript
public readonly s3OutputConfiguration: LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `s3OutputConfigurationInput`<sup>Optional</sup> <a name="s3OutputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfigurationInput"></a>

```typescript
public readonly s3OutputConfigurationInput: IResolvable | LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutequipmentInferenceSchedulerDataOutputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerTagsList <a name="LookoutequipmentInferenceSchedulerTagsList" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get"></a>

```typescript
public get(index: number): LookoutequipmentInferenceSchedulerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutequipmentInferenceSchedulerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]

---


### LookoutequipmentInferenceSchedulerTagsOutputReference <a name="LookoutequipmentInferenceSchedulerTagsOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer"></a>

```typescript
import { lookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutequipmentInferenceSchedulerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>

---



