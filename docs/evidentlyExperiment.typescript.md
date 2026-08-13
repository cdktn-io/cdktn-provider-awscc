# `evidentlyExperiment` Submodule <a name="`evidentlyExperiment` Submodule" id="@cdktn/provider-awscc.evidentlyExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyExperiment <a name="EvidentlyExperiment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment awscc_evidently_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

new evidentlyExperiment.EvidentlyExperiment(scope: Construct, id: string, config: EvidentlyExperimentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig">EvidentlyExperimentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig">EvidentlyExperimentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals">putMetricGoals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig">putOnlineAbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus">putRunningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments">putTreatments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRandomizationSalt">resetRandomizationSalt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRemoveSegment">resetRemoveSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRunningStatus">resetRunningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSamplingRate">resetSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSegment">resetSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricGoals` <a name="putMetricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals"></a>

```typescript
public putMetricGoals(value: IResolvable | EvidentlyExperimentMetricGoals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]

---

##### `putOnlineAbConfig` <a name="putOnlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig"></a>

```typescript
public putOnlineAbConfig(value: EvidentlyExperimentOnlineAbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

---

##### `putRunningStatus` <a name="putRunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus"></a>

```typescript
public putRunningStatus(value: EvidentlyExperimentRunningStatus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags"></a>

```typescript
public putTags(value: IResolvable | EvidentlyExperimentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]

---

##### `putTreatments` <a name="putTreatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments"></a>

```typescript
public putTreatments(value: IResolvable | EvidentlyExperimentTreatments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRandomizationSalt` <a name="resetRandomizationSalt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRandomizationSalt"></a>

```typescript
public resetRandomizationSalt(): void
```

##### `resetRemoveSegment` <a name="resetRemoveSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRemoveSegment"></a>

```typescript
public resetRemoveSegment(): void
```

##### `resetRunningStatus` <a name="resetRunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRunningStatus"></a>

```typescript
public resetRunningStatus(): void
```

##### `resetSamplingRate` <a name="resetSamplingRate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSamplingRate"></a>

```typescript
public resetSamplingRate(): void
```

##### `resetSegment` <a name="resetSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSegment"></a>

```typescript
public resetSegment(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EvidentlyExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

evidentlyExperiment.EvidentlyExperiment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

evidentlyExperiment.EvidentlyExperiment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

evidentlyExperiment.EvidentlyExperiment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

evidentlyExperiment.EvidentlyExperiment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EvidentlyExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EvidentlyExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EvidentlyExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EvidentlyExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoals">metricGoals</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList">EvidentlyExperimentMetricGoalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfig">onlineAbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference">EvidentlyExperimentOnlineAbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatus">runningStatus</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference">EvidentlyExperimentRunningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList">EvidentlyExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatments">treatments</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList">EvidentlyExperimentTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoalsInput">metricGoalsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfigInput">onlineAbConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSaltInput">randomizationSaltInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegmentInput">removeSegmentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatusInput">runningStatusInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRateInput">samplingRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segmentInput">segmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatmentsInput">treatmentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSalt">randomizationSalt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegment">removeSegment</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRate">samplingRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segment">segment</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricGoals`<sup>Required</sup> <a name="metricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoals"></a>

```typescript
public readonly metricGoals: EvidentlyExperimentMetricGoalsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList">EvidentlyExperimentMetricGoalsList</a>

---

##### `onlineAbConfig`<sup>Required</sup> <a name="onlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfig"></a>

```typescript
public readonly onlineAbConfig: EvidentlyExperimentOnlineAbConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference">EvidentlyExperimentOnlineAbConfigOutputReference</a>

---

##### `runningStatus`<sup>Required</sup> <a name="runningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatus"></a>

```typescript
public readonly runningStatus: EvidentlyExperimentRunningStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference">EvidentlyExperimentRunningStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tags"></a>

```typescript
public readonly tags: EvidentlyExperimentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList">EvidentlyExperimentTagsList</a>

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatments"></a>

```typescript
public readonly treatments: EvidentlyExperimentTreatmentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList">EvidentlyExperimentTreatmentsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `metricGoalsInput`<sup>Optional</sup> <a name="metricGoalsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoalsInput"></a>

```typescript
public readonly metricGoalsInput: IResolvable | EvidentlyExperimentMetricGoals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onlineAbConfigInput`<sup>Optional</sup> <a name="onlineAbConfigInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfigInput"></a>

```typescript
public readonly onlineAbConfigInput: IResolvable | EvidentlyExperimentOnlineAbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `randomizationSaltInput`<sup>Optional</sup> <a name="randomizationSaltInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSaltInput"></a>

```typescript
public readonly randomizationSaltInput: string;
```

- *Type:* string

---

##### `removeSegmentInput`<sup>Optional</sup> <a name="removeSegmentInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegmentInput"></a>

```typescript
public readonly removeSegmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `runningStatusInput`<sup>Optional</sup> <a name="runningStatusInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatusInput"></a>

```typescript
public readonly runningStatusInput: IResolvable | EvidentlyExperimentRunningStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

---

##### `samplingRateInput`<sup>Optional</sup> <a name="samplingRateInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRateInput"></a>

```typescript
public readonly samplingRateInput: number;
```

- *Type:* number

---

##### `segmentInput`<sup>Optional</sup> <a name="segmentInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segmentInput"></a>

```typescript
public readonly segmentInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | EvidentlyExperimentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]

---

##### `treatmentsInput`<sup>Optional</sup> <a name="treatmentsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatmentsInput"></a>

```typescript
public readonly treatmentsInput: IResolvable | EvidentlyExperimentTreatments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `randomizationSalt`<sup>Required</sup> <a name="randomizationSalt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSalt"></a>

```typescript
public readonly randomizationSalt: string;
```

- *Type:* string

---

##### `removeSegment`<sup>Required</sup> <a name="removeSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegment"></a>

```typescript
public readonly removeSegment: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segment"></a>

```typescript
public readonly segment: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyExperimentConfig <a name="EvidentlyExperimentConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

const evidentlyExperimentConfig: evidentlyExperiment.EvidentlyExperimentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.metricGoals">metricGoals</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_goals EvidentlyExperiment#metric_goals}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#name EvidentlyExperiment#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.onlineAbConfig">onlineAbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#online_ab_config EvidentlyExperiment#online_ab_config}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#project EvidentlyExperiment#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.treatments">treatments</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatments EvidentlyExperiment#treatments}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.randomizationSalt">randomizationSalt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#randomization_salt EvidentlyExperiment#randomization_salt}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.removeSegment">removeSegment</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#remove_segment EvidentlyExperiment#remove_segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.runningStatus">runningStatus</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a></code> | Start Experiment. Default is False. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.samplingRate">samplingRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#sampling_rate EvidentlyExperiment#sampling_rate}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.segment">segment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#segment EvidentlyExperiment#segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `metricGoals`<sup>Required</sup> <a name="metricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.metricGoals"></a>

```typescript
public readonly metricGoals: IResolvable | EvidentlyExperimentMetricGoals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_goals EvidentlyExperiment#metric_goals}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#name EvidentlyExperiment#name}.

---

##### `onlineAbConfig`<sup>Required</sup> <a name="onlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.onlineAbConfig"></a>

```typescript
public readonly onlineAbConfig: EvidentlyExperimentOnlineAbConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#online_ab_config EvidentlyExperiment#online_ab_config}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#project EvidentlyExperiment#project}.

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.treatments"></a>

```typescript
public readonly treatments: IResolvable | EvidentlyExperimentTreatments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatments EvidentlyExperiment#treatments}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}.

---

##### `randomizationSalt`<sup>Optional</sup> <a name="randomizationSalt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.randomizationSalt"></a>

```typescript
public readonly randomizationSalt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#randomization_salt EvidentlyExperiment#randomization_salt}.

---

##### `removeSegment`<sup>Optional</sup> <a name="removeSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.removeSegment"></a>

```typescript
public readonly removeSegment: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#remove_segment EvidentlyExperiment#remove_segment}.

---

##### `runningStatus`<sup>Optional</sup> <a name="runningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.runningStatus"></a>

```typescript
public readonly runningStatus: EvidentlyExperimentRunningStatus;
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

Start Experiment. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#running_status EvidentlyExperiment#running_status}

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#sampling_rate EvidentlyExperiment#sampling_rate}.

---

##### `segment`<sup>Optional</sup> <a name="segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.segment"></a>

```typescript
public readonly segment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#segment EvidentlyExperiment#segment}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | EvidentlyExperimentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#tags EvidentlyExperiment#tags}

---

### EvidentlyExperimentMetricGoals <a name="EvidentlyExperimentMetricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

const evidentlyExperimentMetricGoals: evidentlyExperiment.EvidentlyExperimentMetricGoals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.desiredChange">desiredChange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#desired_change EvidentlyExperiment#desired_change}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.entityIdKey">entityIdKey</a></code> | <code>string</code> | The JSON path to reference the entity id in the event. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_name EvidentlyExperiment#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.valueKey">valueKey</a></code> | <code>string</code> | The JSON path to reference the numerical metric value in the event. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.eventPattern">eventPattern</a></code> | <code>string</code> | Event patterns have the same structure as the events they match. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.unitLabel">unitLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#unit_label EvidentlyExperiment#unit_label}. |

---

##### `desiredChange`<sup>Required</sup> <a name="desiredChange" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.desiredChange"></a>

```typescript
public readonly desiredChange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#desired_change EvidentlyExperiment#desired_change}.

---

##### `entityIdKey`<sup>Required</sup> <a name="entityIdKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.entityIdKey"></a>

```typescript
public readonly entityIdKey: string;
```

- *Type:* string

The JSON path to reference the entity id in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#entity_id_key EvidentlyExperiment#entity_id_key}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_name EvidentlyExperiment#metric_name}.

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.valueKey"></a>

```typescript
public readonly valueKey: string;
```

- *Type:* string

The JSON path to reference the numerical metric value in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#value_key EvidentlyExperiment#value_key}

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

Event patterns have the same structure as the events they match.

Rules use event patterns to select events. An event pattern either matches an event or it doesn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#event_pattern EvidentlyExperiment#event_pattern}

---

##### `unitLabel`<sup>Optional</sup> <a name="unitLabel" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.unitLabel"></a>

```typescript
public readonly unitLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#unit_label EvidentlyExperiment#unit_label}.

---

### EvidentlyExperimentOnlineAbConfig <a name="EvidentlyExperimentOnlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

const evidentlyExperimentOnlineAbConfig: evidentlyExperiment.EvidentlyExperimentOnlineAbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.controlTreatmentName">controlTreatmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#control_treatment_name EvidentlyExperiment#control_treatment_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.treatmentWeights">treatmentWeights</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_weights EvidentlyExperiment#treatment_weights}. |

---

##### `controlTreatmentName`<sup>Optional</sup> <a name="controlTreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.controlTreatmentName"></a>

```typescript
public readonly controlTreatmentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#control_treatment_name EvidentlyExperiment#control_treatment_name}.

---

##### `treatmentWeights`<sup>Optional</sup> <a name="treatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.treatmentWeights"></a>

```typescript
public readonly treatmentWeights: IResolvable | EvidentlyExperimentOnlineAbConfigTreatmentWeights[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_weights EvidentlyExperiment#treatment_weights}.

---

### EvidentlyExperimentOnlineAbConfigTreatmentWeights <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

const evidentlyExperimentOnlineAbConfigTreatmentWeights: evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.splitWeight">splitWeight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#split_weight EvidentlyExperiment#split_weight}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.treatment">treatment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment EvidentlyExperiment#treatment}. |

---

##### `splitWeight`<sup>Optional</sup> <a name="splitWeight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.splitWeight"></a>

```typescript
public readonly splitWeight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#split_weight EvidentlyExperiment#split_weight}.

---

##### `treatment`<sup>Optional</sup> <a name="treatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.treatment"></a>

```typescript
public readonly treatment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment EvidentlyExperiment#treatment}.

---

### EvidentlyExperimentRunningStatus <a name="EvidentlyExperimentRunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

const evidentlyExperimentRunningStatus: evidentlyExperiment.EvidentlyExperimentRunningStatus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.analysisCompleteTime">analysisCompleteTime</a></code> | <code>string</code> | Provide the analysis Completion time for an experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.desiredState">desiredState</a></code> | <code>string</code> | Provide CANCELLED or COMPLETED desired state when stopping an experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.reason">reason</a></code> | <code>string</code> | Reason is a required input for stopping the experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.status">status</a></code> | <code>string</code> | Provide START or STOP action to apply on an experiment. |

---

##### `analysisCompleteTime`<sup>Optional</sup> <a name="analysisCompleteTime" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.analysisCompleteTime"></a>

```typescript
public readonly analysisCompleteTime: string;
```

- *Type:* string

Provide the analysis Completion time for an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#analysis_complete_time EvidentlyExperiment#analysis_complete_time}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Provide CANCELLED or COMPLETED desired state when stopping an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#desired_state EvidentlyExperiment#desired_state}

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

Reason is a required input for stopping the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#reason EvidentlyExperiment#reason}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Provide START or STOP action to apply on an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#status EvidentlyExperiment#status}

---

### EvidentlyExperimentTags <a name="EvidentlyExperimentTags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

const evidentlyExperimentTags: evidentlyExperiment.EvidentlyExperimentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#key EvidentlyExperiment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#value EvidentlyExperiment#value}

---

### EvidentlyExperimentTreatments <a name="EvidentlyExperimentTreatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

const evidentlyExperimentTreatments: evidentlyExperiment.EvidentlyExperimentTreatments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.feature">feature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#feature EvidentlyExperiment#feature}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.treatmentName">treatmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_name EvidentlyExperiment#treatment_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.variation">variation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#variation EvidentlyExperiment#variation}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.feature"></a>

```typescript
public readonly feature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#feature EvidentlyExperiment#feature}.

---

##### `treatmentName`<sup>Required</sup> <a name="treatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.treatmentName"></a>

```typescript
public readonly treatmentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_name EvidentlyExperiment#treatment_name}.

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.variation"></a>

```typescript
public readonly variation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#variation EvidentlyExperiment#variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyExperimentMetricGoalsList <a name="EvidentlyExperimentMetricGoalsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

new evidentlyExperiment.EvidentlyExperimentMetricGoalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get"></a>

```typescript
public get(index: number): EvidentlyExperimentMetricGoalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyExperimentMetricGoals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]

---


### EvidentlyExperimentMetricGoalsOutputReference <a name="EvidentlyExperimentMetricGoalsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

new evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetEventPattern">resetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetUnitLabel">resetUnitLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventPattern` <a name="resetEventPattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetEventPattern"></a>

```typescript
public resetEventPattern(): void
```

##### `resetUnitLabel` <a name="resetUnitLabel" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetUnitLabel"></a>

```typescript
public resetUnitLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChangeInput">desiredChangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKeyInput">entityIdKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPatternInput">eventPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabelInput">unitLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKeyInput">valueKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChange">desiredChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKey">entityIdKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPattern">eventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabel">unitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKey">valueKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredChangeInput`<sup>Optional</sup> <a name="desiredChangeInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChangeInput"></a>

```typescript
public readonly desiredChangeInput: string;
```

- *Type:* string

---

##### `entityIdKeyInput`<sup>Optional</sup> <a name="entityIdKeyInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKeyInput"></a>

```typescript
public readonly entityIdKeyInput: string;
```

- *Type:* string

---

##### `eventPatternInput`<sup>Optional</sup> <a name="eventPatternInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPatternInput"></a>

```typescript
public readonly eventPatternInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `unitLabelInput`<sup>Optional</sup> <a name="unitLabelInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabelInput"></a>

```typescript
public readonly unitLabelInput: string;
```

- *Type:* string

---

##### `valueKeyInput`<sup>Optional</sup> <a name="valueKeyInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKeyInput"></a>

```typescript
public readonly valueKeyInput: string;
```

- *Type:* string

---

##### `desiredChange`<sup>Required</sup> <a name="desiredChange" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChange"></a>

```typescript
public readonly desiredChange: string;
```

- *Type:* string

---

##### `entityIdKey`<sup>Required</sup> <a name="entityIdKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKey"></a>

```typescript
public readonly entityIdKey: string;
```

- *Type:* string

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `unitLabel`<sup>Required</sup> <a name="unitLabel" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabel"></a>

```typescript
public readonly unitLabel: string;
```

- *Type:* string

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKey"></a>

```typescript
public readonly valueKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyExperimentMetricGoals;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>

---


### EvidentlyExperimentOnlineAbConfigOutputReference <a name="EvidentlyExperimentOnlineAbConfigOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

new evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights">putTreatmentWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetControlTreatmentName">resetControlTreatmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetTreatmentWeights">resetTreatmentWeights</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTreatmentWeights` <a name="putTreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights"></a>

```typescript
public putTreatmentWeights(value: IResolvable | EvidentlyExperimentOnlineAbConfigTreatmentWeights[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]

---

##### `resetControlTreatmentName` <a name="resetControlTreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetControlTreatmentName"></a>

```typescript
public resetControlTreatmentName(): void
```

##### `resetTreatmentWeights` <a name="resetTreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetTreatmentWeights"></a>

```typescript
public resetTreatmentWeights(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeights">treatmentWeights</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList">EvidentlyExperimentOnlineAbConfigTreatmentWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentNameInput">controlTreatmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeightsInput">treatmentWeightsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentName">controlTreatmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `treatmentWeights`<sup>Required</sup> <a name="treatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeights"></a>

```typescript
public readonly treatmentWeights: EvidentlyExperimentOnlineAbConfigTreatmentWeightsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList">EvidentlyExperimentOnlineAbConfigTreatmentWeightsList</a>

---

##### `controlTreatmentNameInput`<sup>Optional</sup> <a name="controlTreatmentNameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentNameInput"></a>

```typescript
public readonly controlTreatmentNameInput: string;
```

- *Type:* string

---

##### `treatmentWeightsInput`<sup>Optional</sup> <a name="treatmentWeightsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeightsInput"></a>

```typescript
public readonly treatmentWeightsInput: IResolvable | EvidentlyExperimentOnlineAbConfigTreatmentWeights[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]

---

##### `controlTreatmentName`<sup>Required</sup> <a name="controlTreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentName"></a>

```typescript
public readonly controlTreatmentName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyExperimentOnlineAbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

---


### EvidentlyExperimentOnlineAbConfigTreatmentWeightsList <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeightsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

new evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get"></a>

```typescript
public get(index: number): EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyExperimentOnlineAbConfigTreatmentWeights[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]

---


### EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

new evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetSplitWeight">resetSplitWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetTreatment">resetTreatment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSplitWeight` <a name="resetSplitWeight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetSplitWeight"></a>

```typescript
public resetSplitWeight(): void
```

##### `resetTreatment` <a name="resetTreatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetTreatment"></a>

```typescript
public resetTreatment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeightInput">splitWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatmentInput">treatmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeight">splitWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatment">treatment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splitWeightInput`<sup>Optional</sup> <a name="splitWeightInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeightInput"></a>

```typescript
public readonly splitWeightInput: number;
```

- *Type:* number

---

##### `treatmentInput`<sup>Optional</sup> <a name="treatmentInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatmentInput"></a>

```typescript
public readonly treatmentInput: string;
```

- *Type:* string

---

##### `splitWeight`<sup>Required</sup> <a name="splitWeight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeight"></a>

```typescript
public readonly splitWeight: number;
```

- *Type:* number

---

##### `treatment`<sup>Required</sup> <a name="treatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatment"></a>

```typescript
public readonly treatment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyExperimentOnlineAbConfigTreatmentWeights;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>

---


### EvidentlyExperimentRunningStatusOutputReference <a name="EvidentlyExperimentRunningStatusOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

new evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetAnalysisCompleteTime">resetAnalysisCompleteTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetReason">resetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnalysisCompleteTime` <a name="resetAnalysisCompleteTime" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetAnalysisCompleteTime"></a>

```typescript
public resetAnalysisCompleteTime(): void
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetReason` <a name="resetReason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetReason"></a>

```typescript
public resetReason(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTimeInput">analysisCompleteTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reasonInput">reasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTime">analysisCompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysisCompleteTimeInput`<sup>Optional</sup> <a name="analysisCompleteTimeInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTimeInput"></a>

```typescript
public readonly analysisCompleteTimeInput: string;
```

- *Type:* string

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `reasonInput`<sup>Optional</sup> <a name="reasonInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reasonInput"></a>

```typescript
public readonly reasonInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `analysisCompleteTime`<sup>Required</sup> <a name="analysisCompleteTime" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTime"></a>

```typescript
public readonly analysisCompleteTime: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyExperimentRunningStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

---


### EvidentlyExperimentTagsList <a name="EvidentlyExperimentTagsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

new evidentlyExperiment.EvidentlyExperimentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get"></a>

```typescript
public get(index: number): EvidentlyExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyExperimentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]

---


### EvidentlyExperimentTagsOutputReference <a name="EvidentlyExperimentTagsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

new evidentlyExperiment.EvidentlyExperimentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyExperimentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>

---


### EvidentlyExperimentTreatmentsList <a name="EvidentlyExperimentTreatmentsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

new evidentlyExperiment.EvidentlyExperimentTreatmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get"></a>

```typescript
public get(index: number): EvidentlyExperimentTreatmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyExperimentTreatments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]

---


### EvidentlyExperimentTreatmentsOutputReference <a name="EvidentlyExperimentTreatmentsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer"></a>

```typescript
import { evidentlyExperiment } from '@cdktn/provider-awscc'

new evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.featureInput">featureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentNameInput">treatmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variationInput">variationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.feature">feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentName">treatmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variation">variation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `featureInput`<sup>Optional</sup> <a name="featureInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.featureInput"></a>

```typescript
public readonly featureInput: string;
```

- *Type:* string

---

##### `treatmentNameInput`<sup>Optional</sup> <a name="treatmentNameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentNameInput"></a>

```typescript
public readonly treatmentNameInput: string;
```

- *Type:* string

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variationInput"></a>

```typescript
public readonly variationInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.feature"></a>

```typescript
public readonly feature: string;
```

- *Type:* string

---

##### `treatmentName`<sup>Required</sup> <a name="treatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentName"></a>

```typescript
public readonly treatmentName: string;
```

- *Type:* string

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variation"></a>

```typescript
public readonly variation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyExperimentTreatments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>

---



