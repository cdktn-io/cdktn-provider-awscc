# `sagemakerProcessingJob` Submodule <a name="`sagemakerProcessingJob` Submodule" id="@cdktn/provider-awscc.sagemakerProcessingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerProcessingJob <a name="SagemakerProcessingJob" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job awscc_sagemaker_processing_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJob(scope: Construct, id: string, config: SagemakerProcessingJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig">SagemakerProcessingJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig">SagemakerProcessingJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putAppSpecification">putAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig">putExperimentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingInputs">putProcessingInputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingOutputConfig">putProcessingOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingResources">putProcessingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putStoppingCondition">putStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetExperimentConfig">resetExperimentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingInputs">resetProcessingInputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingJobName">resetProcessingJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingOutputConfig">resetProcessingOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetStoppingCondition">resetStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppSpecification` <a name="putAppSpecification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putAppSpecification"></a>

```typescript
public putAppSpecification(value: SagemakerProcessingJobAppSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putAppSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

---

##### `putExperimentConfig` <a name="putExperimentConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig"></a>

```typescript
public putExperimentConfig(value: SagemakerProcessingJobExperimentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: SagemakerProcessingJobNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

---

##### `putProcessingInputs` <a name="putProcessingInputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingInputs"></a>

```typescript
public putProcessingInputs(value: IResolvable | SagemakerProcessingJobProcessingInputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingInputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]

---

##### `putProcessingOutputConfig` <a name="putProcessingOutputConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingOutputConfig"></a>

```typescript
public putProcessingOutputConfig(value: SagemakerProcessingJobProcessingOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

---

##### `putProcessingResources` <a name="putProcessingResources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingResources"></a>

```typescript
public putProcessingResources(value: SagemakerProcessingJobProcessingResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

---

##### `putStoppingCondition` <a name="putStoppingCondition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putStoppingCondition"></a>

```typescript
public putStoppingCondition(value: SagemakerProcessingJobStoppingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putStoppingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerProcessingJobTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]

---

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetExperimentConfig` <a name="resetExperimentConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetExperimentConfig"></a>

```typescript
public resetExperimentConfig(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetProcessingInputs` <a name="resetProcessingInputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingInputs"></a>

```typescript
public resetProcessingInputs(): void
```

##### `resetProcessingJobName` <a name="resetProcessingJobName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingJobName"></a>

```typescript
public resetProcessingJobName(): void
```

##### `resetProcessingOutputConfig` <a name="resetProcessingOutputConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingOutputConfig"></a>

```typescript
public resetProcessingOutputConfig(): void
```

##### `resetStoppingCondition` <a name="resetStoppingCondition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetStoppingCondition"></a>

```typescript
public resetStoppingCondition(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerProcessingJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isConstruct"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

sagemakerProcessingJob.SagemakerProcessingJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformElement"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

sagemakerProcessingJob.SagemakerProcessingJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformResource"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

sagemakerProcessingJob.SagemakerProcessingJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerProcessingJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerProcessingJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerProcessingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerProcessingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecification">appSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference">SagemakerProcessingJobAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.autoMlJobArn">autoMlJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.exitMessage">exitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfig">experimentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference">SagemakerProcessingJobExperimentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.monitoringScheduleArn">monitoringScheduleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference">SagemakerProcessingJobNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingEndTime">processingEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputs">processingInputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList">SagemakerProcessingJobProcessingInputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobArn">processingJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobStatus">processingJobStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfig">processingOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResources">processingResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference">SagemakerProcessingJobProcessingResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingStartTime">processingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingCondition">stoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference">SagemakerProcessingJobStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList">SagemakerProcessingJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.trainingJobArn">trainingJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecificationInput">appSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfigInput">experimentConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfigInput">networkConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputsInput">processingInputsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobNameInput">processingJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfigInput">processingOutputConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResourcesInput">processingResourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingConditionInput">stoppingConditionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobName">processingJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appSpecification`<sup>Required</sup> <a name="appSpecification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecification"></a>

```typescript
public readonly appSpecification: SagemakerProcessingJobAppSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference">SagemakerProcessingJobAppSpecificationOutputReference</a>

---

##### `autoMlJobArn`<sup>Required</sup> <a name="autoMlJobArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.autoMlJobArn"></a>

```typescript
public readonly autoMlJobArn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `exitMessage`<sup>Required</sup> <a name="exitMessage" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.exitMessage"></a>

```typescript
public readonly exitMessage: string;
```

- *Type:* string

---

##### `experimentConfig`<sup>Required</sup> <a name="experimentConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfig"></a>

```typescript
public readonly experimentConfig: SagemakerProcessingJobExperimentConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference">SagemakerProcessingJobExperimentConfigOutputReference</a>

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `monitoringScheduleArn`<sup>Required</sup> <a name="monitoringScheduleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.monitoringScheduleArn"></a>

```typescript
public readonly monitoringScheduleArn: string;
```

- *Type:* string

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfig"></a>

```typescript
public readonly networkConfig: SagemakerProcessingJobNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference">SagemakerProcessingJobNetworkConfigOutputReference</a>

---

##### `processingEndTime`<sup>Required</sup> <a name="processingEndTime" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingEndTime"></a>

```typescript
public readonly processingEndTime: string;
```

- *Type:* string

---

##### `processingInputs`<sup>Required</sup> <a name="processingInputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputs"></a>

```typescript
public readonly processingInputs: SagemakerProcessingJobProcessingInputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList">SagemakerProcessingJobProcessingInputsList</a>

---

##### `processingJobArn`<sup>Required</sup> <a name="processingJobArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobArn"></a>

```typescript
public readonly processingJobArn: string;
```

- *Type:* string

---

##### `processingJobStatus`<sup>Required</sup> <a name="processingJobStatus" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobStatus"></a>

```typescript
public readonly processingJobStatus: string;
```

- *Type:* string

---

##### `processingOutputConfig`<sup>Required</sup> <a name="processingOutputConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfig"></a>

```typescript
public readonly processingOutputConfig: SagemakerProcessingJobProcessingOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputReference</a>

---

##### `processingResources`<sup>Required</sup> <a name="processingResources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResources"></a>

```typescript
public readonly processingResources: SagemakerProcessingJobProcessingResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference">SagemakerProcessingJobProcessingResourcesOutputReference</a>

---

##### `processingStartTime`<sup>Required</sup> <a name="processingStartTime" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingStartTime"></a>

```typescript
public readonly processingStartTime: string;
```

- *Type:* string

---

##### `stoppingCondition`<sup>Required</sup> <a name="stoppingCondition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingCondition"></a>

```typescript
public readonly stoppingCondition: SagemakerProcessingJobStoppingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference">SagemakerProcessingJobStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tags"></a>

```typescript
public readonly tags: SagemakerProcessingJobTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList">SagemakerProcessingJobTagsList</a>

---

##### `trainingJobArn`<sup>Required</sup> <a name="trainingJobArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.trainingJobArn"></a>

```typescript
public readonly trainingJobArn: string;
```

- *Type:* string

---

##### `appSpecificationInput`<sup>Optional</sup> <a name="appSpecificationInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecificationInput"></a>

```typescript
public readonly appSpecificationInput: IResolvable | SagemakerProcessingJobAppSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `experimentConfigInput`<sup>Optional</sup> <a name="experimentConfigInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfigInput"></a>

```typescript
public readonly experimentConfigInput: IResolvable | SagemakerProcessingJobExperimentConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: IResolvable | SagemakerProcessingJobNetworkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

---

##### `processingInputsInput`<sup>Optional</sup> <a name="processingInputsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputsInput"></a>

```typescript
public readonly processingInputsInput: IResolvable | SagemakerProcessingJobProcessingInputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]

---

##### `processingJobNameInput`<sup>Optional</sup> <a name="processingJobNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobNameInput"></a>

```typescript
public readonly processingJobNameInput: string;
```

- *Type:* string

---

##### `processingOutputConfigInput`<sup>Optional</sup> <a name="processingOutputConfigInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfigInput"></a>

```typescript
public readonly processingOutputConfigInput: IResolvable | SagemakerProcessingJobProcessingOutputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

---

##### `processingResourcesInput`<sup>Optional</sup> <a name="processingResourcesInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResourcesInput"></a>

```typescript
public readonly processingResourcesInput: IResolvable | SagemakerProcessingJobProcessingResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stoppingConditionInput`<sup>Optional</sup> <a name="stoppingConditionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingConditionInput"></a>

```typescript
public readonly stoppingConditionInput: IResolvable | SagemakerProcessingJobStoppingCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerProcessingJobTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `processingJobName`<sup>Required</sup> <a name="processingJobName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobName"></a>

```typescript
public readonly processingJobName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerProcessingJobAppSpecification <a name="SagemakerProcessingJobAppSpecification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobAppSpecification: sagemakerProcessingJob.SagemakerProcessingJobAppSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.imageUri">imageUri</a></code> | <code>string</code> | The container image to be run by the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | The arguments for a container used to run a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | The entrypoint for a container used to run a processing job. |

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

The container image to be run by the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#image_uri SagemakerProcessingJob#image_uri}

---

##### `containerArguments`<sup>Optional</sup> <a name="containerArguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

The arguments for a container used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#container_arguments SagemakerProcessingJob#container_arguments}

---

##### `containerEntrypoint`<sup>Optional</sup> <a name="containerEntrypoint" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

The entrypoint for a container used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#container_entrypoint SagemakerProcessingJob#container_entrypoint}

---

### SagemakerProcessingJobConfig <a name="SagemakerProcessingJobConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobConfig: sagemakerProcessingJob.SagemakerProcessingJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.appSpecification">appSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a></code> | Configures the processing job to run a specified Docker container image. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingResources">processingResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a></code> | Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Sets the environment variables in the Docker container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.experimentConfig">experimentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a></code> | Associates a SageMaker job as a trial component with an experiment and trial. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingInputs">processingInputs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]</code> | An array of inputs configuring the data to download into the processing container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingJobName">processingJobName</a></code> | <code>string</code> | The name of the processing job. The name must be unique within an AWS Region in the AWS account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingOutputConfig">processingOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a></code> | Configuration for uploading output from the processing container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.stoppingCondition">stoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a></code> | Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]</code> | (Optional) An array of key-value pairs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appSpecification`<sup>Required</sup> <a name="appSpecification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.appSpecification"></a>

```typescript
public readonly appSpecification: SagemakerProcessingJobAppSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

Configures the processing job to run a specified Docker container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#app_specification SagemakerProcessingJob#app_specification}

---

##### `processingResources`<sup>Required</sup> <a name="processingResources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingResources"></a>

```typescript
public readonly processingResources: SagemakerProcessingJobProcessingResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job.

In distributed training, you specify more than one instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#processing_resources SagemakerProcessingJob#processing_resources}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#role_arn SagemakerProcessingJob#role_arn}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#environment SagemakerProcessingJob#environment}

---

##### `experimentConfig`<sup>Optional</sup> <a name="experimentConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.experimentConfig"></a>

```typescript
public readonly experimentConfig: SagemakerProcessingJobExperimentConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

Associates a SageMaker job as a trial component with an experiment and trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#experiment_config SagemakerProcessingJob#experiment_config}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: SagemakerProcessingJobNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#network_config SagemakerProcessingJob#network_config}

---

##### `processingInputs`<sup>Optional</sup> <a name="processingInputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingInputs"></a>

```typescript
public readonly processingInputs: IResolvable | SagemakerProcessingJobProcessingInputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]

An array of inputs configuring the data to download into the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#processing_inputs SagemakerProcessingJob#processing_inputs}

---

##### `processingJobName`<sup>Optional</sup> <a name="processingJobName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingJobName"></a>

```typescript
public readonly processingJobName: string;
```

- *Type:* string

The name of the processing job. The name must be unique within an AWS Region in the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#processing_job_name SagemakerProcessingJob#processing_job_name}

---

##### `processingOutputConfig`<sup>Optional</sup> <a name="processingOutputConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingOutputConfig"></a>

```typescript
public readonly processingOutputConfig: SagemakerProcessingJobProcessingOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

Configuration for uploading output from the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#processing_output_config SagemakerProcessingJob#processing_output_config}

---

##### `stoppingCondition`<sup>Optional</sup> <a name="stoppingCondition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.stoppingCondition"></a>

```typescript
public readonly stoppingCondition: SagemakerProcessingJobStoppingCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

Configures conditions under which the processing job should be stopped, such as how long the processing job has been running.

After the condition is met, the processing job is stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#stopping_condition SagemakerProcessingJob#stopping_condition}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerProcessingJobTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]

(Optional) An array of key-value pairs.

For more information, see Using Cost Allocation Tags(https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the AWS Billing and Cost Management User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#tags SagemakerProcessingJob#tags}

---

### SagemakerProcessingJobExperimentConfig <a name="SagemakerProcessingJobExperimentConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobExperimentConfig: sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.experimentName">experimentName</a></code> | <code>string</code> | The name of an existing experiment to associate with the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.runName">runName</a></code> | <code>string</code> | The name of the experiment run to associate with the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialComponentDisplayName">trialComponentDisplayName</a></code> | <code>string</code> | The display name for the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialName">trialName</a></code> | <code>string</code> | The name of an existing trial to associate the trial component with. |

---

##### `experimentName`<sup>Optional</sup> <a name="experimentName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.experimentName"></a>

```typescript
public readonly experimentName: string;
```

- *Type:* string

The name of an existing experiment to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#experiment_name SagemakerProcessingJob#experiment_name}

---

##### `runName`<sup>Optional</sup> <a name="runName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.runName"></a>

```typescript
public readonly runName: string;
```

- *Type:* string

The name of the experiment run to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#run_name SagemakerProcessingJob#run_name}

---

##### `trialComponentDisplayName`<sup>Optional</sup> <a name="trialComponentDisplayName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialComponentDisplayName"></a>

```typescript
public readonly trialComponentDisplayName: string;
```

- *Type:* string

The display name for the trial component.

If this key isn't specified, the display name is the trial component name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#trial_component_display_name SagemakerProcessingJob#trial_component_display_name}

---

##### `trialName`<sup>Optional</sup> <a name="trialName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialName"></a>

```typescript
public readonly trialName: string;
```

- *Type:* string

The name of an existing trial to associate the trial component with.

If not specified, a new trial is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#trial_name SagemakerProcessingJob#trial_name}

---

### SagemakerProcessingJobNetworkConfig <a name="SagemakerProcessingJobNetworkConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobNetworkConfig: sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableInterContainerTrafficEncryption">enableInterContainerTrafficEncryption</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `enableInterContainerTrafficEncryption`<sup>Optional</sup> <a name="enableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```typescript
public readonly enableInterContainerTrafficEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#enable_inter_container_traffic_encryption SagemakerProcessingJob#enable_inter_container_traffic_encryption}

---

##### `enableNetworkIsolation`<sup>Optional</sup> <a name="enableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableNetworkIsolation"></a>

```typescript
public readonly enableNetworkIsolation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#enable_network_isolation SagemakerProcessingJob#enable_network_isolation}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: SagemakerProcessingJobNetworkConfigVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC. For more information, see https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#vpc_config SagemakerProcessingJob#vpc_config}

---

### SagemakerProcessingJobNetworkConfigVpcConfig <a name="SagemakerProcessingJobNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobNetworkConfigVpcConfig: sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The VPC security group IDs, in the form 'sg-xxxxxxxx'. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The VPC security group IDs, in the form 'sg-xxxxxxxx'.

Specify the security groups for the VPC that is specified in the 'Subnets' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#security_group_ids SagemakerProcessingJob#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

The ID of the subnets in the VPC to which you want to connect your training job or model.

For information about the availability of specific instance types, see https://docs.aws.amazon.com/sagemaker/latest/dg/regions-quotas.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#subnets SagemakerProcessingJob#subnets}

---

### SagemakerProcessingJobProcessingInputs <a name="SagemakerProcessingJobProcessingInputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobProcessingInputs: sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.appManaged">appManaged</a></code> | <code>boolean \| cdktn.IResolvable</code> | When True, input operations such as data download are managed natively by the processing job application. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.datasetDefinition">datasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a></code> | Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either `AthenaDatasetDefinition` or `RedshiftDatasetDefinition` types. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.inputName">inputName</a></code> | <code>string</code> | The name for the processing job input. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.s3Input">s3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a></code> | Configuration for downloading input data from Amazon S3 into the processing container. |

---

##### `appManaged`<sup>Optional</sup> <a name="appManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.appManaged"></a>

```typescript
public readonly appManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When True, input operations such as data download are managed natively by the processing job application.

When False (default), input operations are managed by Amazon SageMaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#app_managed SagemakerProcessingJob#app_managed}

---

##### `datasetDefinition`<sup>Optional</sup> <a name="datasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.datasetDefinition"></a>

```typescript
public readonly datasetDefinition: SagemakerProcessingJobProcessingInputsDatasetDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a>

Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either `AthenaDatasetDefinition` or `RedshiftDatasetDefinition` types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#dataset_definition SagemakerProcessingJob#dataset_definition}

---

##### `inputName`<sup>Optional</sup> <a name="inputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

The name for the processing job input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#input_name SagemakerProcessingJob#input_name}

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.s3Input"></a>

```typescript
public readonly s3Input: SagemakerProcessingJobProcessingInputsS3Input;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a>

Configuration for downloading input data from Amazon S3 into the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#s3_input SagemakerProcessingJob#s3_input}

---

### SagemakerProcessingJobProcessingInputsDatasetDefinition <a name="SagemakerProcessingJobProcessingInputsDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobProcessingInputsDatasetDefinition: sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.athenaDatasetDefinition">athenaDatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a></code> | Configuration for Athena Dataset Definition input. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.dataDistributionType">dataDistributionType</a></code> | <code>string</code> | Whether the generated dataset is FullyReplicated or ShardedByS3Key (default). |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.inputMode">inputMode</a></code> | <code>string</code> | Whether to use File or Pipe input mode. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.localPath">localPath</a></code> | <code>string</code> | The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.redshiftDatasetDefinition">redshiftDatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a></code> | Configuration for Redshift Dataset Definition input. |

---

##### `athenaDatasetDefinition`<sup>Optional</sup> <a name="athenaDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.athenaDatasetDefinition"></a>

```typescript
public readonly athenaDatasetDefinition: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

Configuration for Athena Dataset Definition input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#athena_dataset_definition SagemakerProcessingJob#athena_dataset_definition}

---

##### `dataDistributionType`<sup>Optional</sup> <a name="dataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.dataDistributionType"></a>

```typescript
public readonly dataDistributionType: string;
```

- *Type:* string

Whether the generated dataset is FullyReplicated or ShardedByS3Key (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#data_distribution_type SagemakerProcessingJob#data_distribution_type}

---

##### `inputMode`<sup>Optional</sup> <a name="inputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.inputMode"></a>

```typescript
public readonly inputMode: string;
```

- *Type:* string

Whether to use File or Pipe input mode.

In File (default) mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#input_mode SagemakerProcessingJob#input_mode}

---

##### `localPath`<sup>Optional</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a processing job.

LocalPath is an absolute path to the input data. This is a required parameter when AppManaged is False (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

##### `redshiftDatasetDefinition`<sup>Optional</sup> <a name="redshiftDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.redshiftDatasetDefinition"></a>

```typescript
public readonly redshiftDatasetDefinition: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

Configuration for Redshift Dataset Definition input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#redshift_dataset_definition SagemakerProcessingJob#redshift_dataset_definition}

---

### SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition: sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.catalog">catalog</a></code> | <code>string</code> | The name of the data catalog used in Athena query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.database">database</a></code> | <code>string</code> | The name of the database used in the Athena query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data generated from an Athena query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputCompression">outputCompression</a></code> | <code>string</code> | The compression used for Athena query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputFormat">outputFormat</a></code> | <code>string</code> | The data storage format for Athena query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputS3Uri">outputS3Uri</a></code> | <code>string</code> | The location in Amazon S3 where Athena query results are stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.queryString">queryString</a></code> | <code>string</code> | The SQL query statements, to be executed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.workGroup">workGroup</a></code> | <code>string</code> | The name of the workgroup in which the Athena query is being started. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The name of the data catalog used in Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#catalog SagemakerProcessingJob#catalog}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The name of the database used in the Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#database SagemakerProcessingJob#database}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data generated from an Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

##### `outputCompression`<sup>Optional</sup> <a name="outputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputCompression"></a>

```typescript
public readonly outputCompression: string;
```

- *Type:* string

The compression used for Athena query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#output_compression SagemakerProcessingJob#output_compression}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

The data storage format for Athena query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#output_format SagemakerProcessingJob#output_format}

---

##### `outputS3Uri`<sup>Optional</sup> <a name="outputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputS3Uri"></a>

```typescript
public readonly outputS3Uri: string;
```

- *Type:* string

The location in Amazon S3 where Athena query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#output_s3_uri SagemakerProcessingJob#output_s3_uri}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

The SQL query statements, to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#query_string SagemakerProcessingJob#query_string}

---

##### `workGroup`<sup>Optional</sup> <a name="workGroup" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.workGroup"></a>

```typescript
public readonly workGroup: string;
```

- *Type:* string

The name of the workgroup in which the Athena query is being started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#work_group SagemakerProcessingJob#work_group}

---

### SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition: sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterId">clusterId</a></code> | <code>string</code> | The Redshift cluster Identifier. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterRoleArn">clusterRoleArn</a></code> | <code>string</code> | The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.database">database</a></code> | <code>string</code> | The name of the Redshift database used in Redshift query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.dbUser">dbUser</a></code> | <code>string</code> | The database user name used in Redshift query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data from a Redshift execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputCompression">outputCompression</a></code> | <code>string</code> | The compression used for Redshift query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputFormat">outputFormat</a></code> | <code>string</code> | The data storage format for Redshift query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputS3Uri">outputS3Uri</a></code> | <code>string</code> | The location in Amazon S3 where the Redshift query results are stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.queryString">queryString</a></code> | <code>string</code> | The SQL query statements to be executed. |

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The Redshift cluster Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#cluster_id SagemakerProcessingJob#cluster_id}

---

##### `clusterRoleArn`<sup>Optional</sup> <a name="clusterRoleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterRoleArn"></a>

```typescript
public readonly clusterRoleArn: string;
```

- *Type:* string

The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#cluster_role_arn SagemakerProcessingJob#cluster_role_arn}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The name of the Redshift database used in Redshift query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#database SagemakerProcessingJob#database}

---

##### `dbUser`<sup>Optional</sup> <a name="dbUser" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

The database user name used in Redshift query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#db_user SagemakerProcessingJob#db_user}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data from a Redshift execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

##### `outputCompression`<sup>Optional</sup> <a name="outputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputCompression"></a>

```typescript
public readonly outputCompression: string;
```

- *Type:* string

The compression used for Redshift query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#output_compression SagemakerProcessingJob#output_compression}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

The data storage format for Redshift query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#output_format SagemakerProcessingJob#output_format}

---

##### `outputS3Uri`<sup>Optional</sup> <a name="outputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputS3Uri"></a>

```typescript
public readonly outputS3Uri: string;
```

- *Type:* string

The location in Amazon S3 where the Redshift query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#output_s3_uri SagemakerProcessingJob#output_s3_uri}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

The SQL query statements to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#query_string SagemakerProcessingJob#query_string}

---

### SagemakerProcessingJobProcessingInputsS3Input <a name="SagemakerProcessingJobProcessingInputsS3Input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobProcessingInputsS3Input: sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.localPath">localPath</a></code> | <code>string</code> | The local path in your container where you want Amazon SageMaker to write input data to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3CompressionType">s3CompressionType</a></code> | <code>string</code> | Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | Whether to distribute the data from Amazon S3 to all processing instances with `FullyReplicated`, or whether the data from Amazon S3 is shared by Amazon S3 key, downloading one shard of data to each processing instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataType">s3DataType</a></code> | <code>string</code> | Whether you use an S3Prefix or a ManifestFile for the data type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | Whether to use File or Pipe input mode. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3Uri">s3Uri</a></code> | <code>string</code> | The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job. |

---

##### `localPath`<sup>Optional</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

The local path in your container where you want Amazon SageMaker to write input data to.

`LocalPath` is an absolute path to the input data and must begin with `/opt/ml/processing/`. LocalPath is a required parameter when `AppManaged` is `False` (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

##### `s3CompressionType`<sup>Optional</sup> <a name="s3CompressionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3CompressionType"></a>

```typescript
public readonly s3CompressionType: string;
```

- *Type:* string

Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing container.

`Gzip` can only be used when `Pipe` mode is specified as the `S3InputMode`. In `Pipe` mode, Amazon SageMaker streams input data from the source directly to your container without using the EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#s3_compression_type SagemakerProcessingJob#s3_compression_type}

---

##### `s3DataDistributionType`<sup>Optional</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

Whether to distribute the data from Amazon S3 to all processing instances with `FullyReplicated`, or whether the data from Amazon S3 is shared by Amazon S3 key, downloading one shard of data to each processing instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#s3_data_distribution_type SagemakerProcessingJob#s3_data_distribution_type}

---

##### `s3DataType`<sup>Optional</sup> <a name="s3DataType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataType"></a>

```typescript
public readonly s3DataType: string;
```

- *Type:* string

Whether you use an S3Prefix or a ManifestFile for the data type.

If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing job. If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#s3_data_type SagemakerProcessingJob#s3_data_type}

---

##### `s3InputMode`<sup>Optional</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

Whether to use File or Pipe input mode.

In File mode, Amazon SageMaker copies the data from the input source onto the local ML storage volume before starting your processing container. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your processing container into named pipes without using the ML storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#s3_input_mode SagemakerProcessingJob#s3_input_mode}

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#s3_uri SagemakerProcessingJob#s3_uri}

---

### SagemakerProcessingJobProcessingOutputConfig <a name="SagemakerProcessingJobProcessingOutputConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobProcessingOutputConfig: sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing job output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.outputs">outputs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]</code> | An array of outputs configuring the data to upload from the processing container. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing job output.

KmsKeyId can be an ID of a KMS key, ARN of a KMS key, or alias of a KMS key. The KmsKeyId is applied to all outputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.outputs"></a>

```typescript
public readonly outputs: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]

An array of outputs configuring the data to upload from the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#outputs SagemakerProcessingJob#outputs}

---

### SagemakerProcessingJobProcessingOutputConfigOutputs <a name="SagemakerProcessingJobProcessingOutputConfigOutputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobProcessingOutputConfigOutputs: sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.appManaged">appManaged</a></code> | <code>boolean \| cdktn.IResolvable</code> | When True, output operations such as data upload are managed natively by the processing job application. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.featureStoreOutput">featureStoreOutput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a></code> | Configuration for processing job outputs in Amazon SageMaker Feature Store. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.outputName">outputName</a></code> | <code>string</code> | The name for the processing job output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.s3Output">s3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a></code> | Configuration for uploading output data to Amazon S3 from the processing container. |

---

##### `appManaged`<sup>Optional</sup> <a name="appManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.appManaged"></a>

```typescript
public readonly appManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When True, output operations such as data upload are managed natively by the processing job application.

When False (default), output operations are managed by Amazon SageMaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#app_managed SagemakerProcessingJob#app_managed}

---

##### `featureStoreOutput`<sup>Optional</sup> <a name="featureStoreOutput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.featureStoreOutput"></a>

```typescript
public readonly featureStoreOutput: SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

Configuration for processing job outputs in Amazon SageMaker Feature Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#feature_store_output SagemakerProcessingJob#feature_store_output}

---

##### `outputName`<sup>Optional</sup> <a name="outputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.outputName"></a>

```typescript
public readonly outputName: string;
```

- *Type:* string

The name for the processing job output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#output_name SagemakerProcessingJob#output_name}

---

##### `s3Output`<sup>Optional</sup> <a name="s3Output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.s3Output"></a>

```typescript
public readonly s3Output: SagemakerProcessingJobProcessingOutputConfigOutputsS3Output;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

Configuration for uploading output data to Amazon S3 from the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#s3_output SagemakerProcessingJob#s3_output}

---

### SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput <a name="SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput: sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput.property.featureGroupName">featureGroupName</a></code> | <code>string</code> | The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output. |

---

##### `featureGroupName`<sup>Optional</sup> <a name="featureGroupName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput.property.featureGroupName"></a>

```typescript
public readonly featureGroupName: string;
```

- *Type:* string

The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output.

Note that your processing script is responsible for putting records into your Feature Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#feature_group_name SagemakerProcessingJob#feature_group_name}

---

### SagemakerProcessingJobProcessingOutputConfigOutputsS3Output <a name="SagemakerProcessingJobProcessingOutputConfigOutputsS3Output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobProcessingOutputConfigOutputsS3Output: sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.localPath">localPath</a></code> | <code>string</code> | The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3UploadMode">s3UploadMode</a></code> | <code>string</code> | Whether to upload the results of the processing job continuously or after the job completes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3Uri">s3Uri</a></code> | <code>string</code> | A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job. |

---

##### `localPath`<sup>Optional</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3.

LocalPath is an absolute path to a directory containing output files. This directory will be created by the platform and exist when your container's entrypoint is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

##### `s3UploadMode`<sup>Optional</sup> <a name="s3UploadMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3UploadMode"></a>

```typescript
public readonly s3UploadMode: string;
```

- *Type:* string

Whether to upload the results of the processing job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#s3_upload_mode SagemakerProcessingJob#s3_upload_mode}

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#s3_uri SagemakerProcessingJob#s3_uri}

---

### SagemakerProcessingJobProcessingResources <a name="SagemakerProcessingJobProcessingResources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobProcessingResources: sagemakerProcessingJob.SagemakerProcessingJobProcessingResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a></code> | Configuration for the cluster used to run a processing job. |

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: SagemakerProcessingJobProcessingResourcesClusterConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

Configuration for the cluster used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#cluster_config SagemakerProcessingJob#cluster_config}

---

### SagemakerProcessingJobProcessingResourcesClusterConfig <a name="SagemakerProcessingJobProcessingResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobProcessingResourcesClusterConfig: sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | The number of ML compute instances to use in the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceType">instanceType</a></code> | <code>string</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | The size of the ML storage volume in gigabytes that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job. |

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

The number of ML compute instances to use in the processing job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#instance_count SagemakerProcessingJob#instance_count}

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#instance_type SagemakerProcessingJob#instance_type}

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

The size of the ML storage volume in gigabytes that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#volume_size_in_gb SagemakerProcessingJob#volume_size_in_gb}

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#volume_kms_key_id SagemakerProcessingJob#volume_kms_key_id}

---

### SagemakerProcessingJobStoppingCondition <a name="SagemakerProcessingJobStoppingCondition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobStoppingCondition: sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition.property.maxRuntimeInSeconds">maxRuntimeInSeconds</a></code> | <code>number</code> | Specifies the maximum runtime in seconds. |

---

##### `maxRuntimeInSeconds`<sup>Optional</sup> <a name="maxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition.property.maxRuntimeInSeconds"></a>

```typescript
public readonly maxRuntimeInSeconds: number;
```

- *Type:* number

Specifies the maximum runtime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#max_runtime_in_seconds SagemakerProcessingJob#max_runtime_in_seconds}

---

### SagemakerProcessingJobTags <a name="SagemakerProcessingJobTags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

const sagemakerProcessingJobTags: sagemakerProcessingJob.SagemakerProcessingJobTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.key">key</a></code> | <code>string</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#key SagemakerProcessingJob#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_processing_job#value SagemakerProcessingJob#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerProcessingJobAppSpecificationOutputReference <a name="SagemakerProcessingJobAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerArguments">resetContainerArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerEntrypoint">resetContainerEntrypoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerArguments` <a name="resetContainerArguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerArguments"></a>

```typescript
public resetContainerArguments(): void
```

##### `resetContainerEntrypoint` <a name="resetContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerEntrypoint"></a>

```typescript
public resetContainerEntrypoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArgumentsInput">containerArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypointInput">containerEntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerArgumentsInput`<sup>Optional</sup> <a name="containerArgumentsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArgumentsInput"></a>

```typescript
public readonly containerArgumentsInput: string[];
```

- *Type:* string[]

---

##### `containerEntrypointInput`<sup>Optional</sup> <a name="containerEntrypointInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypointInput"></a>

```typescript
public readonly containerEntrypointInput: string[];
```

- *Type:* string[]

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUriInput"></a>

```typescript
public readonly imageUriInput: string;
```

- *Type:* string

---

##### `containerArguments`<sup>Required</sup> <a name="containerArguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

---

##### `containerEntrypoint`<sup>Required</sup> <a name="containerEntrypoint" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobAppSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

---


### SagemakerProcessingJobExperimentConfigOutputReference <a name="SagemakerProcessingJobExperimentConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetExperimentName">resetExperimentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetRunName">resetRunName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialComponentDisplayName">resetTrialComponentDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialName">resetTrialName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExperimentName` <a name="resetExperimentName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetExperimentName"></a>

```typescript
public resetExperimentName(): void
```

##### `resetRunName` <a name="resetRunName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetRunName"></a>

```typescript
public resetRunName(): void
```

##### `resetTrialComponentDisplayName` <a name="resetTrialComponentDisplayName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialComponentDisplayName"></a>

```typescript
public resetTrialComponentDisplayName(): void
```

##### `resetTrialName` <a name="resetTrialName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialName"></a>

```typescript
public resetTrialName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentNameInput">experimentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runNameInput">runNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayNameInput">trialComponentDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialNameInput">trialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentName">experimentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runName">runName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayName">trialComponentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialName">trialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `experimentNameInput`<sup>Optional</sup> <a name="experimentNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentNameInput"></a>

```typescript
public readonly experimentNameInput: string;
```

- *Type:* string

---

##### `runNameInput`<sup>Optional</sup> <a name="runNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runNameInput"></a>

```typescript
public readonly runNameInput: string;
```

- *Type:* string

---

##### `trialComponentDisplayNameInput`<sup>Optional</sup> <a name="trialComponentDisplayNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayNameInput"></a>

```typescript
public readonly trialComponentDisplayNameInput: string;
```

- *Type:* string

---

##### `trialNameInput`<sup>Optional</sup> <a name="trialNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialNameInput"></a>

```typescript
public readonly trialNameInput: string;
```

- *Type:* string

---

##### `experimentName`<sup>Required</sup> <a name="experimentName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentName"></a>

```typescript
public readonly experimentName: string;
```

- *Type:* string

---

##### `runName`<sup>Required</sup> <a name="runName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runName"></a>

```typescript
public readonly runName: string;
```

- *Type:* string

---

##### `trialComponentDisplayName`<sup>Required</sup> <a name="trialComponentDisplayName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayName"></a>

```typescript
public readonly trialComponentDisplayName: string;
```

- *Type:* string

---

##### `trialName`<sup>Required</sup> <a name="trialName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialName"></a>

```typescript
public readonly trialName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobExperimentConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

---


### SagemakerProcessingJobNetworkConfigOutputReference <a name="SagemakerProcessingJobNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">resetEnableInterContainerTrafficEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableNetworkIsolation">resetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.putVpcConfig"></a>

```typescript
public putVpcConfig(value: SagemakerProcessingJobNetworkConfigVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

---

##### `resetEnableInterContainerTrafficEncryption` <a name="resetEnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```typescript
public resetEnableInterContainerTrafficEncryption(): void
```

##### `resetEnableNetworkIsolation` <a name="resetEnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```typescript
public resetEnableNetworkIsolation(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference">SagemakerProcessingJobNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">enableInterContainerTrafficEncryptionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolationInput">enableNetworkIsolationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enableInterContainerTrafficEncryption</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: SagemakerProcessingJobNetworkConfigVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference">SagemakerProcessingJobNetworkConfigVpcConfigOutputReference</a>

---

##### `enableInterContainerTrafficEncryptionInput`<sup>Optional</sup> <a name="enableInterContainerTrafficEncryptionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```typescript
public readonly enableInterContainerTrafficEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableNetworkIsolationInput`<sup>Optional</sup> <a name="enableNetworkIsolationInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```typescript
public readonly enableNetworkIsolationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | SagemakerProcessingJobNetworkConfigVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

---

##### `enableInterContainerTrafficEncryption`<sup>Required</sup> <a name="enableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```typescript
public readonly enableInterContainerTrafficEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableNetworkIsolation`<sup>Required</sup> <a name="enableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```typescript
public readonly enableNetworkIsolation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobNetworkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

---


### SagemakerProcessingJobNetworkConfigVpcConfigOutputReference <a name="SagemakerProcessingJobNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobNetworkConfigVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

---


### SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputCompression">resetOutputCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputS3Uri">resetOutputS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetWorkGroup">resetWorkGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetOutputCompression` <a name="resetOutputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputCompression"></a>

```typescript
public resetOutputCompression(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```

##### `resetOutputS3Uri` <a name="resetOutputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputS3Uri"></a>

```typescript
public resetOutputS3Uri(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```

##### `resetWorkGroup` <a name="resetWorkGroup" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetWorkGroup"></a>

```typescript
public resetWorkGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompressionInput">outputCompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3UriInput">outputS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroupInput">workGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompression">outputCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3Uri">outputS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroup">workGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `outputCompressionInput`<sup>Optional</sup> <a name="outputCompressionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompressionInput"></a>

```typescript
public readonly outputCompressionInput: string;
```

- *Type:* string

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `outputS3UriInput`<sup>Optional</sup> <a name="outputS3UriInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3UriInput"></a>

```typescript
public readonly outputS3UriInput: string;
```

- *Type:* string

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `workGroupInput`<sup>Optional</sup> <a name="workGroupInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroupInput"></a>

```typescript
public readonly workGroupInput: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `outputCompression`<sup>Required</sup> <a name="outputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompression"></a>

```typescript
public readonly outputCompression: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `outputS3Uri`<sup>Required</sup> <a name="outputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3Uri"></a>

```typescript
public readonly outputS3Uri: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `workGroup`<sup>Required</sup> <a name="workGroup" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroup"></a>

```typescript
public readonly workGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

---


### SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition">putAthenaDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition">putRedshiftDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetAthenaDatasetDefinition">resetAthenaDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetDataDistributionType">resetDataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetInputMode">resetInputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetLocalPath">resetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetRedshiftDatasetDefinition">resetRedshiftDatasetDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAthenaDatasetDefinition` <a name="putAthenaDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition"></a>

```typescript
public putAthenaDatasetDefinition(value: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

---

##### `putRedshiftDatasetDefinition` <a name="putRedshiftDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition"></a>

```typescript
public putRedshiftDatasetDefinition(value: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

---

##### `resetAthenaDatasetDefinition` <a name="resetAthenaDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetAthenaDatasetDefinition"></a>

```typescript
public resetAthenaDatasetDefinition(): void
```

##### `resetDataDistributionType` <a name="resetDataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetDataDistributionType"></a>

```typescript
public resetDataDistributionType(): void
```

##### `resetInputMode` <a name="resetInputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetInputMode"></a>

```typescript
public resetInputMode(): void
```

##### `resetLocalPath` <a name="resetLocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetLocalPath"></a>

```typescript
public resetLocalPath(): void
```

##### `resetRedshiftDatasetDefinition` <a name="resetRedshiftDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetRedshiftDatasetDefinition"></a>

```typescript
public resetRedshiftDatasetDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinition">athenaDatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinition">redshiftDatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinitionInput">athenaDatasetDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionTypeInput">dataDistributionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputModeInput">inputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPathInput">localPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinitionInput">redshiftDatasetDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionType">dataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputMode">inputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `athenaDatasetDefinition`<sup>Required</sup> <a name="athenaDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinition"></a>

```typescript
public readonly athenaDatasetDefinition: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference</a>

---

##### `redshiftDatasetDefinition`<sup>Required</sup> <a name="redshiftDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinition"></a>

```typescript
public readonly redshiftDatasetDefinition: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference</a>

---

##### `athenaDatasetDefinitionInput`<sup>Optional</sup> <a name="athenaDatasetDefinitionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinitionInput"></a>

```typescript
public readonly athenaDatasetDefinitionInput: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

---

##### `dataDistributionTypeInput`<sup>Optional</sup> <a name="dataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionTypeInput"></a>

```typescript
public readonly dataDistributionTypeInput: string;
```

- *Type:* string

---

##### `inputModeInput`<sup>Optional</sup> <a name="inputModeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputModeInput"></a>

```typescript
public readonly inputModeInput: string;
```

- *Type:* string

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPathInput"></a>

```typescript
public readonly localPathInput: string;
```

- *Type:* string

---

##### `redshiftDatasetDefinitionInput`<sup>Optional</sup> <a name="redshiftDatasetDefinitionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinitionInput"></a>

```typescript
public readonly redshiftDatasetDefinitionInput: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

---

##### `dataDistributionType`<sup>Required</sup> <a name="dataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionType"></a>

```typescript
public readonly dataDistributionType: string;
```

- *Type:* string

---

##### `inputMode`<sup>Required</sup> <a name="inputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputMode"></a>

```typescript
public readonly inputMode: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a>

---


### SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterRoleArn">resetClusterRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDbUser">resetDbUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputCompression">resetOutputCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputS3Uri">resetOutputS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterId` <a name="resetClusterId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetClusterRoleArn` <a name="resetClusterRoleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterRoleArn"></a>

```typescript
public resetClusterRoleArn(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDbUser` <a name="resetDbUser" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDbUser"></a>

```typescript
public resetDbUser(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetOutputCompression` <a name="resetOutputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputCompression"></a>

```typescript
public resetOutputCompression(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```

##### `resetOutputS3Uri` <a name="resetOutputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputS3Uri"></a>

```typescript
public resetOutputS3Uri(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArnInput">clusterRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUserInput">dbUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompressionInput">outputCompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3UriInput">outputS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArn">clusterRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUser">dbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompression">outputCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3Uri">outputS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `clusterRoleArnInput`<sup>Optional</sup> <a name="clusterRoleArnInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArnInput"></a>

```typescript
public readonly clusterRoleArnInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dbUserInput`<sup>Optional</sup> <a name="dbUserInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUserInput"></a>

```typescript
public readonly dbUserInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `outputCompressionInput`<sup>Optional</sup> <a name="outputCompressionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompressionInput"></a>

```typescript
public readonly outputCompressionInput: string;
```

- *Type:* string

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `outputS3UriInput`<sup>Optional</sup> <a name="outputS3UriInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3UriInput"></a>

```typescript
public readonly outputS3UriInput: string;
```

- *Type:* string

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `clusterRoleArn`<sup>Required</sup> <a name="clusterRoleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArn"></a>

```typescript
public readonly clusterRoleArn: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `outputCompression`<sup>Required</sup> <a name="outputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompression"></a>

```typescript
public readonly outputCompression: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `outputS3Uri`<sup>Required</sup> <a name="outputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3Uri"></a>

```typescript
public readonly outputS3Uri: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

---


### SagemakerProcessingJobProcessingInputsList <a name="SagemakerProcessingJobProcessingInputsList" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.get"></a>

```typescript
public get(index: number): SagemakerProcessingJobProcessingInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingInputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]

---


### SagemakerProcessingJobProcessingInputsOutputReference <a name="SagemakerProcessingJobProcessingInputsOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition">putDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input">putS3Input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetAppManaged">resetAppManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetDatasetDefinition">resetDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetInputName">resetInputName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetS3Input">resetS3Input</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetDefinition` <a name="putDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition"></a>

```typescript
public putDatasetDefinition(value: SagemakerProcessingJobProcessingInputsDatasetDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a>

---

##### `putS3Input` <a name="putS3Input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input"></a>

```typescript
public putS3Input(value: SagemakerProcessingJobProcessingInputsS3Input): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a>

---

##### `resetAppManaged` <a name="resetAppManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetAppManaged"></a>

```typescript
public resetAppManaged(): void
```

##### `resetDatasetDefinition` <a name="resetDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetDatasetDefinition"></a>

```typescript
public resetDatasetDefinition(): void
```

##### `resetInputName` <a name="resetInputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetInputName"></a>

```typescript
public resetInputName(): void
```

##### `resetS3Input` <a name="resetS3Input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetS3Input"></a>

```typescript
public resetS3Input(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinition">datasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference">SagemakerProcessingJobProcessingInputsS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManagedInput">appManagedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinitionInput">datasetDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputNameInput">inputNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3InputInput">s3InputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManaged">appManaged</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputName">inputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetDefinition`<sup>Required</sup> <a name="datasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinition"></a>

```typescript
public readonly datasetDefinition: SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference</a>

---

##### `s3Input`<sup>Required</sup> <a name="s3Input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: SagemakerProcessingJobProcessingInputsS3InputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference">SagemakerProcessingJobProcessingInputsS3InputOutputReference</a>

---

##### `appManagedInput`<sup>Optional</sup> <a name="appManagedInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManagedInput"></a>

```typescript
public readonly appManagedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `datasetDefinitionInput`<sup>Optional</sup> <a name="datasetDefinitionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinitionInput"></a>

```typescript
public readonly datasetDefinitionInput: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a>

---

##### `inputNameInput`<sup>Optional</sup> <a name="inputNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputNameInput"></a>

```typescript
public readonly inputNameInput: string;
```

- *Type:* string

---

##### `s3InputInput`<sup>Optional</sup> <a name="s3InputInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3InputInput"></a>

```typescript
public readonly s3InputInput: IResolvable | SagemakerProcessingJobProcessingInputsS3Input;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a>

---

##### `appManaged`<sup>Required</sup> <a name="appManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManaged"></a>

```typescript
public readonly appManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputName`<sup>Required</sup> <a name="inputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingInputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>

---


### SagemakerProcessingJobProcessingInputsS3InputOutputReference <a name="SagemakerProcessingJobProcessingInputsS3InputOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetLocalPath">resetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3CompressionType">resetS3CompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataDistributionType">resetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataType">resetS3DataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3InputMode">resetS3InputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalPath` <a name="resetLocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetLocalPath"></a>

```typescript
public resetLocalPath(): void
```

##### `resetS3CompressionType` <a name="resetS3CompressionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3CompressionType"></a>

```typescript
public resetS3CompressionType(): void
```

##### `resetS3DataDistributionType` <a name="resetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataDistributionType"></a>

```typescript
public resetS3DataDistributionType(): void
```

##### `resetS3DataType` <a name="resetS3DataType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataType"></a>

```typescript
public resetS3DataType(): void
```

##### `resetS3InputMode` <a name="resetS3InputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3InputMode"></a>

```typescript
public resetS3InputMode(): void
```

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3Uri"></a>

```typescript
public resetS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPathInput">localPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionTypeInput">s3CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionTypeInput">s3DataDistributionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataTypeInput">s3DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputModeInput">s3InputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionType">s3CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataType">s3DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPathInput"></a>

```typescript
public readonly localPathInput: string;
```

- *Type:* string

---

##### `s3CompressionTypeInput`<sup>Optional</sup> <a name="s3CompressionTypeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionTypeInput"></a>

```typescript
public readonly s3CompressionTypeInput: string;
```

- *Type:* string

---

##### `s3DataDistributionTypeInput`<sup>Optional</sup> <a name="s3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionTypeInput"></a>

```typescript
public readonly s3DataDistributionTypeInput: string;
```

- *Type:* string

---

##### `s3DataTypeInput`<sup>Optional</sup> <a name="s3DataTypeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataTypeInput"></a>

```typescript
public readonly s3DataTypeInput: string;
```

- *Type:* string

---

##### `s3InputModeInput`<sup>Optional</sup> <a name="s3InputModeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputModeInput"></a>

```typescript
public readonly s3InputModeInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `s3CompressionType`<sup>Required</sup> <a name="s3CompressionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionType"></a>

```typescript
public readonly s3CompressionType: string;
```

- *Type:* string

---

##### `s3DataDistributionType`<sup>Required</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

---

##### `s3DataType`<sup>Required</sup> <a name="s3DataType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataType"></a>

```typescript
public readonly s3DataType: string;
```

- *Type:* string

---

##### `s3InputMode`<sup>Required</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingInputsS3Input;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetOutputs">resetOutputs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.putOutputs"></a>

```typescript
public putOutputs(value: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.putOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetOutputs` <a name="resetOutputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetOutputs"></a>

```typescript
public resetOutputs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList">SagemakerProcessingJobProcessingOutputConfigOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputsInput">outputsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputs"></a>

```typescript
public readonly outputs: SagemakerProcessingJobProcessingOutputConfigOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList">SagemakerProcessingJobProcessingOutputConfigOutputsList</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputsInput"></a>

```typescript
public readonly outputsInput: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingOutputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resetFeatureGroupName">resetFeatureGroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeatureGroupName` <a name="resetFeatureGroupName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resetFeatureGroupName"></a>

```typescript
public resetFeatureGroupName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupNameInput">featureGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupName">featureGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureGroupNameInput`<sup>Optional</sup> <a name="featureGroupNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupNameInput"></a>

```typescript
public readonly featureGroupNameInput: string;
```

- *Type:* string

---

##### `featureGroupName`<sup>Required</sup> <a name="featureGroupName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupName"></a>

```typescript
public readonly featureGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputsList <a name="SagemakerProcessingJobProcessingOutputConfigOutputsList" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.get"></a>

```typescript
public get(index: number): SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]

---


### SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putFeatureStoreOutput">putFeatureStoreOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putS3Output">putS3Output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetAppManaged">resetAppManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetFeatureStoreOutput">resetFeatureStoreOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetOutputName">resetOutputName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetS3Output">resetS3Output</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFeatureStoreOutput` <a name="putFeatureStoreOutput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putFeatureStoreOutput"></a>

```typescript
public putFeatureStoreOutput(value: SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putFeatureStoreOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

---

##### `putS3Output` <a name="putS3Output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putS3Output"></a>

```typescript
public putS3Output(value: SagemakerProcessingJobProcessingOutputConfigOutputsS3Output): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putS3Output.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

---

##### `resetAppManaged` <a name="resetAppManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetAppManaged"></a>

```typescript
public resetAppManaged(): void
```

##### `resetFeatureStoreOutput` <a name="resetFeatureStoreOutput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetFeatureStoreOutput"></a>

```typescript
public resetFeatureStoreOutput(): void
```

##### `resetOutputName` <a name="resetOutputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetOutputName"></a>

```typescript
public resetOutputName(): void
```

##### `resetS3Output` <a name="resetS3Output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetS3Output"></a>

```typescript
public resetS3Output(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutput">featureStoreOutput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3Output">s3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManagedInput">appManagedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutputInput">featureStoreOutputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputNameInput">outputNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3OutputInput">s3OutputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManaged">appManaged</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputName">outputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureStoreOutput`<sup>Required</sup> <a name="featureStoreOutput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutput"></a>

```typescript
public readonly featureStoreOutput: SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference</a>

---

##### `s3Output`<sup>Required</sup> <a name="s3Output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3Output"></a>

```typescript
public readonly s3Output: SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference</a>

---

##### `appManagedInput`<sup>Optional</sup> <a name="appManagedInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManagedInput"></a>

```typescript
public readonly appManagedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `featureStoreOutputInput`<sup>Optional</sup> <a name="featureStoreOutputInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutputInput"></a>

```typescript
public readonly featureStoreOutputInput: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

---

##### `outputNameInput`<sup>Optional</sup> <a name="outputNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputNameInput"></a>

```typescript
public readonly outputNameInput: string;
```

- *Type:* string

---

##### `s3OutputInput`<sup>Optional</sup> <a name="s3OutputInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3OutputInput"></a>

```typescript
public readonly s3OutputInput: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputsS3Output;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

---

##### `appManaged`<sup>Required</sup> <a name="appManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManaged"></a>

```typescript
public readonly appManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `outputName`<sup>Required</sup> <a name="outputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputName"></a>

```typescript
public readonly outputName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetLocalPath">resetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3UploadMode">resetS3UploadMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalPath` <a name="resetLocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetLocalPath"></a>

```typescript
public resetLocalPath(): void
```

##### `resetS3UploadMode` <a name="resetS3UploadMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```typescript
public resetS3UploadMode(): void
```

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3Uri"></a>

```typescript
public resetS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPathInput">localPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadModeInput">s3UploadModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadMode">s3UploadMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPathInput"></a>

```typescript
public readonly localPathInput: string;
```

- *Type:* string

---

##### `s3UploadModeInput`<sup>Optional</sup> <a name="s3UploadModeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```typescript
public readonly s3UploadModeInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `s3UploadMode`<sup>Required</sup> <a name="s3UploadMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```typescript
public readonly s3UploadMode: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputsS3Output;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

---


### SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference <a name="SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```typescript
public resetVolumeKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```typescript
public readonly volumeKmsKeyIdInput: string;
```

- *Type:* string

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```typescript
public readonly volumeSizeInGbInput: number;
```

- *Type:* number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingResourcesClusterConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

---


### SagemakerProcessingJobProcessingResourcesOutputReference <a name="SagemakerProcessingJobProcessingResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig">putClusterConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterConfig` <a name="putClusterConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig"></a>

```typescript
public putClusterConfig(value: SagemakerProcessingJobProcessingResourcesClusterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference">SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfigInput">clusterConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference">SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference</a>

---

##### `clusterConfigInput`<sup>Optional</sup> <a name="clusterConfigInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfigInput"></a>

```typescript
public readonly clusterConfigInput: IResolvable | SagemakerProcessingJobProcessingResourcesClusterConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobProcessingResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

---


### SagemakerProcessingJobStoppingConditionOutputReference <a name="SagemakerProcessingJobStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resetMaxRuntimeInSeconds">resetMaxRuntimeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxRuntimeInSeconds` <a name="resetMaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```typescript
public resetMaxRuntimeInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">maxRuntimeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSeconds">maxRuntimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRuntimeInSecondsInput`<sup>Optional</sup> <a name="maxRuntimeInSecondsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```typescript
public readonly maxRuntimeInSecondsInput: number;
```

- *Type:* number

---

##### `maxRuntimeInSeconds`<sup>Required</sup> <a name="maxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```typescript
public readonly maxRuntimeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobStoppingCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

---


### SagemakerProcessingJobTagsList <a name="SagemakerProcessingJobTagsList" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.get"></a>

```typescript
public get(index: number): SagemakerProcessingJobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]

---


### SagemakerProcessingJobTagsOutputReference <a name="SagemakerProcessingJobTagsOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerProcessingJob } from '@cdktn/provider-awscc'

new sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProcessingJobTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>

---



