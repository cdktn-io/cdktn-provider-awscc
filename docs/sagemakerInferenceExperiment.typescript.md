# `sagemakerInferenceExperiment` Submodule <a name="`sagemakerInferenceExperiment` Submodule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerInferenceExperiment <a name="SagemakerInferenceExperiment" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment awscc_sagemaker_inference_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperiment(scope: Construct, id: string, config: SagemakerInferenceExperimentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig">SagemakerInferenceExperimentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig">SagemakerInferenceExperimentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putDataStorageConfig">putDataStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putModelVariants">putModelVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putShadowModeConfig">putShadowModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDataStorageConfig">resetDataStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetShadowModeConfig">resetShadowModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetStatusReason">resetStatusReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataStorageConfig` <a name="putDataStorageConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putDataStorageConfig"></a>

```typescript
public putDataStorageConfig(value: SagemakerInferenceExperimentDataStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putDataStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a>

---

##### `putModelVariants` <a name="putModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putModelVariants"></a>

```typescript
public putModelVariants(value: IResolvable | SagemakerInferenceExperimentModelVariants[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putModelVariants.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>[]

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putSchedule"></a>

```typescript
public putSchedule(value: SagemakerInferenceExperimentSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a>

---

##### `putShadowModeConfig` <a name="putShadowModeConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putShadowModeConfig"></a>

```typescript
public putShadowModeConfig(value: SagemakerInferenceExperimentShadowModeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putShadowModeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerInferenceExperimentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>[]

---

##### `resetDataStorageConfig` <a name="resetDataStorageConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDataStorageConfig"></a>

```typescript
public resetDataStorageConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetShadowModeConfig` <a name="resetShadowModeConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetShadowModeConfig"></a>

```typescript
public resetShadowModeConfig(): void
```

##### `resetStatusReason` <a name="resetStatusReason" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetStatusReason"></a>

```typescript
public resetStatusReason(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isConstruct"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

sagemakerInferenceExperiment.SagemakerInferenceExperiment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformElement"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformResource"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerInferenceExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerInferenceExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerInferenceExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfig">dataStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference">SagemakerInferenceExperimentDataStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointMetadata">endpointMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference">SagemakerInferenceExperimentEndpointMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariants">modelVariants</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList">SagemakerInferenceExperimentModelVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference">SagemakerInferenceExperimentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfig">shadowModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference">SagemakerInferenceExperimentShadowModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList">SagemakerInferenceExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfigInput">dataStorageConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariantsInput">modelVariantsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.scheduleInput">scheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfigInput">shadowModeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReasonInput">statusReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `dataStorageConfig`<sup>Required</sup> <a name="dataStorageConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfig"></a>

```typescript
public readonly dataStorageConfig: SagemakerInferenceExperimentDataStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference">SagemakerInferenceExperimentDataStorageConfigOutputReference</a>

---

##### `endpointMetadata`<sup>Required</sup> <a name="endpointMetadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointMetadata"></a>

```typescript
public readonly endpointMetadata: SagemakerInferenceExperimentEndpointMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference">SagemakerInferenceExperimentEndpointMetadataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `modelVariants`<sup>Required</sup> <a name="modelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariants"></a>

```typescript
public readonly modelVariants: SagemakerInferenceExperimentModelVariantsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList">SagemakerInferenceExperimentModelVariantsList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.schedule"></a>

```typescript
public readonly schedule: SagemakerInferenceExperimentScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference">SagemakerInferenceExperimentScheduleOutputReference</a>

---

##### `shadowModeConfig`<sup>Required</sup> <a name="shadowModeConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfig"></a>

```typescript
public readonly shadowModeConfig: SagemakerInferenceExperimentShadowModeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference">SagemakerInferenceExperimentShadowModeConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tags"></a>

```typescript
public readonly tags: SagemakerInferenceExperimentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList">SagemakerInferenceExperimentTagsList</a>

---

##### `dataStorageConfigInput`<sup>Optional</sup> <a name="dataStorageConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfigInput"></a>

```typescript
public readonly dataStorageConfigInput: IResolvable | SagemakerInferenceExperimentDataStorageConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `modelVariantsInput`<sup>Optional</sup> <a name="modelVariantsInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariantsInput"></a>

```typescript
public readonly modelVariantsInput: IResolvable | SagemakerInferenceExperimentModelVariants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | SagemakerInferenceExperimentSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a>

---

##### `shadowModeConfigInput`<sup>Optional</sup> <a name="shadowModeConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfigInput"></a>

```typescript
public readonly shadowModeConfigInput: IResolvable | SagemakerInferenceExperimentShadowModeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a>

---

##### `statusReasonInput`<sup>Optional</sup> <a name="statusReasonInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReasonInput"></a>

```typescript
public readonly statusReasonInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerInferenceExperimentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerInferenceExperimentConfig <a name="SagemakerInferenceExperimentConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const sagemakerInferenceExperimentConfig: sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.endpointName">endpointName</a></code> | <code>string</code> | The name of the endpoint used to run the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.modelVariants">modelVariants</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>[]</code> | An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.name">name</a></code> | <code>string</code> | The name for the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.type">type</a></code> | <code>string</code> | The type of the inference experiment that you want to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dataStorageConfig">dataStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a></code> | The Amazon S3 location and configuration for storing inference request and response data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.description">description</a></code> | <code>string</code> | The description of the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.desiredState">desiredState</a></code> | <code>string</code> | The desired state of the experiment after starting or stopping operation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a></code> | The duration for which you want the inference experiment to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.shadowModeConfig">shadowModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a></code> | The configuration of ShadowMode inference experiment type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.statusReason">statusReason</a></code> | <code>string</code> | The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

The name of the endpoint used to run the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#endpoint_name SagemakerInferenceExperiment#endpoint_name}

---

##### `modelVariants`<sup>Required</sup> <a name="modelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.modelVariants"></a>

```typescript
public readonly modelVariants: IResolvable | SagemakerInferenceExperimentModelVariants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>[]

An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#model_variants SagemakerInferenceExperiment#model_variants}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#name SagemakerInferenceExperiment#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#role_arn SagemakerInferenceExperiment#role_arn}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the inference experiment that you want to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#type SagemakerInferenceExperiment#type}

---

##### `dataStorageConfig`<sup>Optional</sup> <a name="dataStorageConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dataStorageConfig"></a>

```typescript
public readonly dataStorageConfig: SagemakerInferenceExperimentDataStorageConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a>

The Amazon S3 location and configuration for storing inference request and response data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#data_storage_config SagemakerInferenceExperiment#data_storage_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#description SagemakerInferenceExperiment#description}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

The desired state of the experiment after starting or stopping operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#desired_state SagemakerInferenceExperiment#desired_state}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#kms_key SagemakerInferenceExperiment#kms_key}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.schedule"></a>

```typescript
public readonly schedule: SagemakerInferenceExperimentSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a>

The duration for which you want the inference experiment to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#schedule SagemakerInferenceExperiment#schedule}

---

##### `shadowModeConfig`<sup>Optional</sup> <a name="shadowModeConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.shadowModeConfig"></a>

```typescript
public readonly shadowModeConfig: SagemakerInferenceExperimentShadowModeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a>

The configuration of ShadowMode inference experiment type.

Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#shadow_mode_config SagemakerInferenceExperiment#shadow_mode_config}

---

##### `statusReason`<sup>Optional</sup> <a name="statusReason" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#status_reason SagemakerInferenceExperiment#status_reason}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerInferenceExperimentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#tags SagemakerInferenceExperiment#tags}

---

### SagemakerInferenceExperimentDataStorageConfig <a name="SagemakerInferenceExperimentDataStorageConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const sagemakerInferenceExperimentDataStorageConfig: sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.contentType">contentType</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a></code> | Configuration specifying how to treat different headers. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.destination">destination</a></code> | <code>string</code> | The Amazon S3 bucket where the inference request and response data is stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption. |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.contentType"></a>

```typescript
public readonly contentType: SagemakerInferenceExperimentDataStorageConfigContentType;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a>

Configuration specifying how to treat different headers.

If no headers are specified SageMaker will by default base64 encode when capturing the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#content_type SagemakerInferenceExperiment#content_type}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The Amazon S3 bucket where the inference request and response data is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#destination SagemakerInferenceExperiment#destination}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#kms_key SagemakerInferenceExperiment#kms_key}

---

### SagemakerInferenceExperimentDataStorageConfigContentType <a name="SagemakerInferenceExperimentDataStorageConfigContentType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const sagemakerInferenceExperimentDataStorageConfigContentType: sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.csvContentTypes">csvContentTypes</a></code> | <code>string[]</code> | The list of all content type headers that SageMaker will treat as CSV and capture accordingly. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.jsonContentTypes">jsonContentTypes</a></code> | <code>string[]</code> | The list of all content type headers that SageMaker will treat as JSON and capture accordingly. |

---

##### `csvContentTypes`<sup>Optional</sup> <a name="csvContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.csvContentTypes"></a>

```typescript
public readonly csvContentTypes: string[];
```

- *Type:* string[]

The list of all content type headers that SageMaker will treat as CSV and capture accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#csv_content_types SagemakerInferenceExperiment#csv_content_types}

---

##### `jsonContentTypes`<sup>Optional</sup> <a name="jsonContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.jsonContentTypes"></a>

```typescript
public readonly jsonContentTypes: string[];
```

- *Type:* string[]

The list of all content type headers that SageMaker will treat as JSON and capture accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#json_content_types SagemakerInferenceExperiment#json_content_types}

---

### SagemakerInferenceExperimentEndpointMetadata <a name="SagemakerInferenceExperimentEndpointMetadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const sagemakerInferenceExperimentEndpointMetadata: sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata = { ... }
```


### SagemakerInferenceExperimentModelVariants <a name="SagemakerInferenceExperimentModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const sagemakerInferenceExperimentModelVariants: sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.infrastructureConfig">infrastructureConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a></code> | The configuration for the infrastructure that the model will be deployed to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.modelName">modelName</a></code> | <code>string</code> | The name of the Amazon SageMaker Model entity. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.variantName">variantName</a></code> | <code>string</code> | The name of the variant. |

---

##### `infrastructureConfig`<sup>Required</sup> <a name="infrastructureConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.infrastructureConfig"></a>

```typescript
public readonly infrastructureConfig: SagemakerInferenceExperimentModelVariantsInfrastructureConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a>

The configuration for the infrastructure that the model will be deployed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#infrastructure_config SagemakerInferenceExperiment#infrastructure_config}

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The name of the Amazon SageMaker Model entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#model_name SagemakerInferenceExperiment#model_name}

---

##### `variantName`<sup>Required</sup> <a name="variantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.variantName"></a>

```typescript
public readonly variantName: string;
```

- *Type:* string

The name of the variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#variant_name SagemakerInferenceExperiment#variant_name}

---

### SagemakerInferenceExperimentModelVariantsInfrastructureConfig <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const sagemakerInferenceExperimentModelVariantsInfrastructureConfig: sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.infrastructureType">infrastructureType</a></code> | <code>string</code> | The type of the inference experiment that you want to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.realTimeInferenceConfig">realTimeInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a></code> | The infrastructure configuration for deploying the model to a real-time inference endpoint. |

---

##### `infrastructureType`<sup>Required</sup> <a name="infrastructureType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.infrastructureType"></a>

```typescript
public readonly infrastructureType: string;
```

- *Type:* string

The type of the inference experiment that you want to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#infrastructure_type SagemakerInferenceExperiment#infrastructure_type}

---

##### `realTimeInferenceConfig`<sup>Required</sup> <a name="realTimeInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.realTimeInferenceConfig"></a>

```typescript
public readonly realTimeInferenceConfig: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

The infrastructure configuration for deploying the model to a real-time inference endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#real_time_inference_config SagemakerInferenceExperiment#real_time_inference_config}

---

### SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const sagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig: sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | The number of instances of the type specified by InstanceType. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceType">instanceType</a></code> | <code>string</code> | The instance type the model is deployed to. |

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

The number of instances of the type specified by InstanceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#instance_count SagemakerInferenceExperiment#instance_count}

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The instance type the model is deployed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#instance_type SagemakerInferenceExperiment#instance_type}

---

### SagemakerInferenceExperimentSchedule <a name="SagemakerInferenceExperimentSchedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const sagemakerInferenceExperimentSchedule: sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.endTime">endTime</a></code> | <code>string</code> | The timestamp at which the inference experiment ended or will end. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.startTime">startTime</a></code> | <code>string</code> | The timestamp at which the inference experiment started or will start. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The timestamp at which the inference experiment ended or will end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#end_time SagemakerInferenceExperiment#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The timestamp at which the inference experiment started or will start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#start_time SagemakerInferenceExperiment#start_time}

---

### SagemakerInferenceExperimentShadowModeConfig <a name="SagemakerInferenceExperimentShadowModeConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const sagemakerInferenceExperimentShadowModeConfig: sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.shadowModelVariants">shadowModelVariants</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>[]</code> | List of shadow variant configurations. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.sourceModelVariantName">sourceModelVariantName</a></code> | <code>string</code> | The name of the production variant, which takes all the inference requests. |

---

##### `shadowModelVariants`<sup>Optional</sup> <a name="shadowModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.shadowModelVariants"></a>

```typescript
public readonly shadowModelVariants: IResolvable | SagemakerInferenceExperimentShadowModeConfigShadowModelVariants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>[]

List of shadow variant configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#shadow_model_variants SagemakerInferenceExperiment#shadow_model_variants}

---

##### `sourceModelVariantName`<sup>Optional</sup> <a name="sourceModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.sourceModelVariantName"></a>

```typescript
public readonly sourceModelVariantName: string;
```

- *Type:* string

The name of the production variant, which takes all the inference requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#source_model_variant_name SagemakerInferenceExperiment#source_model_variant_name}

---

### SagemakerInferenceExperimentShadowModeConfigShadowModelVariants <a name="SagemakerInferenceExperimentShadowModeConfigShadowModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const sagemakerInferenceExperimentShadowModeConfigShadowModelVariants: sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.shadowModelVariantName">shadowModelVariantName</a></code> | <code>string</code> | The name of the shadow variant. |

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#sampling_percentage SagemakerInferenceExperiment#sampling_percentage}

---

##### `shadowModelVariantName`<sup>Optional</sup> <a name="shadowModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.shadowModelVariantName"></a>

```typescript
public readonly shadowModelVariantName: string;
```

- *Type:* string

The name of the shadow variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#shadow_model_variant_name SagemakerInferenceExperiment#shadow_model_variant_name}

---

### SagemakerInferenceExperimentTags <a name="SagemakerInferenceExperimentTags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const sagemakerInferenceExperimentTags: sagemakerInferenceExperiment.SagemakerInferenceExperimentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#key SagemakerInferenceExperiment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_experiment#value SagemakerInferenceExperiment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference <a name="SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetCsvContentTypes">resetCsvContentTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetJsonContentTypes">resetJsonContentTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCsvContentTypes` <a name="resetCsvContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetCsvContentTypes"></a>

```typescript
public resetCsvContentTypes(): void
```

##### `resetJsonContentTypes` <a name="resetJsonContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetJsonContentTypes"></a>

```typescript
public resetJsonContentTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypesInput">csvContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypesInput">jsonContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypes">csvContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypes">jsonContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csvContentTypesInput`<sup>Optional</sup> <a name="csvContentTypesInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypesInput"></a>

```typescript
public readonly csvContentTypesInput: string[];
```

- *Type:* string[]

---

##### `jsonContentTypesInput`<sup>Optional</sup> <a name="jsonContentTypesInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypesInput"></a>

```typescript
public readonly jsonContentTypesInput: string[];
```

- *Type:* string[]

---

##### `csvContentTypes`<sup>Required</sup> <a name="csvContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypes"></a>

```typescript
public readonly csvContentTypes: string[];
```

- *Type:* string[]

---

##### `jsonContentTypes`<sup>Required</sup> <a name="jsonContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypes"></a>

```typescript
public readonly jsonContentTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentDataStorageConfigContentType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a>

---


### SagemakerInferenceExperimentDataStorageConfigOutputReference <a name="SagemakerInferenceExperimentDataStorageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.putContentType">putContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContentType` <a name="putContentType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.putContentType"></a>

```typescript
public putContentType(value: SagemakerInferenceExperimentDataStorageConfigContentType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.putContentType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a>

---

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentType">contentType</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference">SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentType"></a>

```typescript
public readonly contentType: SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference">SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: IResolvable | SagemakerInferenceExperimentDataStorageConfigContentType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentDataStorageConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a>

---


### SagemakerInferenceExperimentEndpointMetadataOutputReference <a name="SagemakerInferenceExperimentEndpointMetadataOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointConfigName">endpointConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointStatus">endpointStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata">SagemakerInferenceExperimentEndpointMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointConfigName`<sup>Required</sup> <a name="endpointConfigName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointConfigName"></a>

```typescript
public readonly endpointConfigName: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `endpointStatus`<sup>Required</sup> <a name="endpointStatus" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointStatus"></a>

```typescript
public readonly endpointStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerInferenceExperimentEndpointMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata">SagemakerInferenceExperimentEndpointMetadata</a>

---


### SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.putRealTimeInferenceConfig">putRealTimeInferenceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRealTimeInferenceConfig` <a name="putRealTimeInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.putRealTimeInferenceConfig"></a>

```typescript
public putRealTimeInferenceConfig(value: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.putRealTimeInferenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfig">realTimeInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureTypeInput">infrastructureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfigInput">realTimeInferenceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureType">infrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `realTimeInferenceConfig`<sup>Required</sup> <a name="realTimeInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfig"></a>

```typescript
public readonly realTimeInferenceConfig: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference</a>

---

##### `infrastructureTypeInput`<sup>Optional</sup> <a name="infrastructureTypeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureTypeInput"></a>

```typescript
public readonly infrastructureTypeInput: string;
```

- *Type:* string

---

##### `realTimeInferenceConfigInput`<sup>Optional</sup> <a name="realTimeInferenceConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfigInput"></a>

```typescript
public readonly realTimeInferenceConfigInput: IResolvable | SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

---

##### `infrastructureType`<sup>Required</sup> <a name="infrastructureType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureType"></a>

```typescript
public readonly infrastructureType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentModelVariantsInfrastructureConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a>

---


### SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

---


### SagemakerInferenceExperimentModelVariantsList <a name="SagemakerInferenceExperimentModelVariantsList" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.get"></a>

```typescript
public get(index: number): SagemakerInferenceExperimentModelVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentModelVariants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>[]

---


### SagemakerInferenceExperimentModelVariantsOutputReference <a name="SagemakerInferenceExperimentModelVariantsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.putInfrastructureConfig">putInfrastructureConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfrastructureConfig` <a name="putInfrastructureConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.putInfrastructureConfig"></a>

```typescript
public putInfrastructureConfig(value: SagemakerInferenceExperimentModelVariantsInfrastructureConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.putInfrastructureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfig">infrastructureConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfigInput">infrastructureConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantNameInput">variantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantName">variantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `infrastructureConfig`<sup>Required</sup> <a name="infrastructureConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfig"></a>

```typescript
public readonly infrastructureConfig: SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference</a>

---

##### `infrastructureConfigInput`<sup>Optional</sup> <a name="infrastructureConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfigInput"></a>

```typescript
public readonly infrastructureConfigInput: IResolvable | SagemakerInferenceExperimentModelVariantsInfrastructureConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a>

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelNameInput"></a>

```typescript
public readonly modelNameInput: string;
```

- *Type:* string

---

##### `variantNameInput`<sup>Optional</sup> <a name="variantNameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantNameInput"></a>

```typescript
public readonly variantNameInput: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `variantName`<sup>Required</sup> <a name="variantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantName"></a>

```typescript
public readonly variantName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentModelVariants;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>

---


### SagemakerInferenceExperimentScheduleOutputReference <a name="SagemakerInferenceExperimentScheduleOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a>

---


### SagemakerInferenceExperimentShadowModeConfigOutputReference <a name="SagemakerInferenceExperimentShadowModeConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.putShadowModelVariants">putShadowModelVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetShadowModelVariants">resetShadowModelVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetSourceModelVariantName">resetSourceModelVariantName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShadowModelVariants` <a name="putShadowModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.putShadowModelVariants"></a>

```typescript
public putShadowModelVariants(value: IResolvable | SagemakerInferenceExperimentShadowModeConfigShadowModelVariants[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.putShadowModelVariants.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>[]

---

##### `resetShadowModelVariants` <a name="resetShadowModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetShadowModelVariants"></a>

```typescript
public resetShadowModelVariants(): void
```

##### `resetSourceModelVariantName` <a name="resetSourceModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetSourceModelVariantName"></a>

```typescript
public resetSourceModelVariantName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariants">shadowModelVariants</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList">SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariantsInput">shadowModelVariantsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantNameInput">sourceModelVariantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantName">sourceModelVariantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shadowModelVariants`<sup>Required</sup> <a name="shadowModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariants"></a>

```typescript
public readonly shadowModelVariants: SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList">SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList</a>

---

##### `shadowModelVariantsInput`<sup>Optional</sup> <a name="shadowModelVariantsInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariantsInput"></a>

```typescript
public readonly shadowModelVariantsInput: IResolvable | SagemakerInferenceExperimentShadowModeConfigShadowModelVariants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>[]

---

##### `sourceModelVariantNameInput`<sup>Optional</sup> <a name="sourceModelVariantNameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantNameInput"></a>

```typescript
public readonly sourceModelVariantNameInput: string;
```

- *Type:* string

---

##### `sourceModelVariantName`<sup>Required</sup> <a name="sourceModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantName"></a>

```typescript
public readonly sourceModelVariantName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentShadowModeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a>

---


### SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList <a name="SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get"></a>

```typescript
public get(index: number): SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentShadowModeConfigShadowModelVariants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>[]

---


### SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference <a name="SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetSamplingPercentage">resetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetShadowModelVariantName">resetShadowModelVariantName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSamplingPercentage` <a name="resetSamplingPercentage" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetSamplingPercentage"></a>

```typescript
public resetSamplingPercentage(): void
```

##### `resetShadowModelVariantName` <a name="resetShadowModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetShadowModelVariantName"></a>

```typescript
public resetShadowModelVariantName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentageInput">samplingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantNameInput">shadowModelVariantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantName">shadowModelVariantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samplingPercentageInput`<sup>Optional</sup> <a name="samplingPercentageInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentageInput"></a>

```typescript
public readonly samplingPercentageInput: number;
```

- *Type:* number

---

##### `shadowModelVariantNameInput`<sup>Optional</sup> <a name="shadowModelVariantNameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantNameInput"></a>

```typescript
public readonly shadowModelVariantNameInput: string;
```

- *Type:* string

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

---

##### `shadowModelVariantName`<sup>Required</sup> <a name="shadowModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantName"></a>

```typescript
public readonly shadowModelVariantName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentShadowModeConfigShadowModelVariants;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>

---


### SagemakerInferenceExperimentTagsList <a name="SagemakerInferenceExperimentTagsList" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.get"></a>

```typescript
public get(index: number): SagemakerInferenceExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>[]

---


### SagemakerInferenceExperimentTagsOutputReference <a name="SagemakerInferenceExperimentTagsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceExperimentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>

---



