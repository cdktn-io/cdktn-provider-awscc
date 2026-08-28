# `sagemakerExperimentTrialComponent` Submodule <a name="`sagemakerExperimentTrialComponent` Submodule" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerExperimentTrialComponent <a name="SagemakerExperimentTrialComponent" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component awscc_sagemaker_experiment_trial_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

new sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent(scope: Construct, id: string, config: SagemakerExperimentTrialComponentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig">SagemakerExperimentTrialComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig">SagemakerExperimentTrialComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties">putMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus">putStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetMetadataProperties">resetMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadataProperties` <a name="putMetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties"></a>

```typescript
public putMetadataProperties(value: SagemakerExperimentTrialComponentMetadataProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

---

##### `putStatus` <a name="putStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus"></a>

```typescript
public putStatus(value: SagemakerExperimentTrialComponentStatus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerExperimentTrialComponentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetMetadataProperties` <a name="resetMetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetMetadataProperties"></a>

```typescript
public resetMetadataProperties(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerExperimentTrialComponent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerExperimentTrialComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerExperimentTrialComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerExperimentTrialComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerExperimentTrialComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lineageGroupArn">lineageGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataProperties">metadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference">SagemakerExperimentTrialComponentMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference">SagemakerExperimentTrialComponentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList">SagemakerExperimentTrialComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataPropertiesInput">metadataPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.statusInput">statusInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentNameInput">trialComponentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentName">trialComponentName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `lineageGroupArn`<sup>Required</sup> <a name="lineageGroupArn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lineageGroupArn"></a>

```typescript
public readonly lineageGroupArn: string;
```

- *Type:* string

---

##### `metadataProperties`<sup>Required</sup> <a name="metadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataProperties"></a>

```typescript
public readonly metadataProperties: SagemakerExperimentTrialComponentMetadataPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference">SagemakerExperimentTrialComponentMetadataPropertiesOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.status"></a>

```typescript
public readonly status: SagemakerExperimentTrialComponentStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference">SagemakerExperimentTrialComponentStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tags"></a>

```typescript
public readonly tags: SagemakerExperimentTrialComponentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList">SagemakerExperimentTrialComponentTagsList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `metadataPropertiesInput`<sup>Optional</sup> <a name="metadataPropertiesInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataPropertiesInput"></a>

```typescript
public readonly metadataPropertiesInput: IResolvable | SagemakerExperimentTrialComponentMetadataProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.statusInput"></a>

```typescript
public readonly statusInput: IResolvable | SagemakerExperimentTrialComponentStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerExperimentTrialComponentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>[]

---

##### `trialComponentNameInput`<sup>Optional</sup> <a name="trialComponentNameInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentNameInput"></a>

```typescript
public readonly trialComponentNameInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `trialComponentName`<sup>Required</sup> <a name="trialComponentName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentName"></a>

```typescript
public readonly trialComponentName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerExperimentTrialComponentConfig <a name="SagemakerExperimentTrialComponentConfig" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.Initializer"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

const sagemakerExperimentTrialComponentConfig: sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.trialComponentName">trialComponentName</a></code> | <code>string</code> | The name of the trial component. The name must be unique in your AWS account and is not case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.displayName">displayName</a></code> | <code>string</code> | The name of the component as displayed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.endTime">endTime</a></code> | <code>string</code> | When the component ended. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.metadataProperties">metadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.startTime">startTime</a></code> | <code>string</code> | When the component started. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | The status of the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>[]</code> | A list of tags to associate with the component. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `trialComponentName`<sup>Required</sup> <a name="trialComponentName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.trialComponentName"></a>

```typescript
public readonly trialComponentName: string;
```

- *Type:* string

The name of the trial component. The name must be unique in your AWS account and is not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#trial_component_name SagemakerExperimentTrialComponent#trial_component_name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of the component as displayed.

The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#display_name SagemakerExperimentTrialComponent#display_name}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

When the component ended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#end_time SagemakerExperimentTrialComponent#end_time}

---

##### `metadataProperties`<sup>Optional</sup> <a name="metadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.metadataProperties"></a>

```typescript
public readonly metadataProperties: SagemakerExperimentTrialComponentMetadataProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#metadata_properties SagemakerExperimentTrialComponent#metadata_properties}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

When the component started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#start_time SagemakerExperimentTrialComponent#start_time}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.status"></a>

```typescript
public readonly status: SagemakerExperimentTrialComponentStatus;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#status SagemakerExperimentTrialComponent#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerExperimentTrialComponentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>[]

A list of tags to associate with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#tags SagemakerExperimentTrialComponent#tags}

---

### SagemakerExperimentTrialComponentMetadataProperties <a name="SagemakerExperimentTrialComponentMetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.Initializer"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

const sagemakerExperimentTrialComponentMetadataProperties: sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.commitId">commitId</a></code> | <code>string</code> | The commit ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.generatedBy">generatedBy</a></code> | <code>string</code> | The entity this entity was generated by. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.projectId">projectId</a></code> | <code>string</code> | The project ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.repository">repository</a></code> | <code>string</code> | The repository. |

---

##### `commitId`<sup>Optional</sup> <a name="commitId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.commitId"></a>

```typescript
public readonly commitId: string;
```

- *Type:* string

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#commit_id SagemakerExperimentTrialComponent#commit_id}

---

##### `generatedBy`<sup>Optional</sup> <a name="generatedBy" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.generatedBy"></a>

```typescript
public readonly generatedBy: string;
```

- *Type:* string

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#generated_by SagemakerExperimentTrialComponent#generated_by}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#project_id SagemakerExperimentTrialComponent#project_id}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#repository SagemakerExperimentTrialComponent#repository}

---

### SagemakerExperimentTrialComponentStatus <a name="SagemakerExperimentTrialComponentStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.Initializer"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

const sagemakerExperimentTrialComponentStatus: sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.message">message</a></code> | <code>string</code> | If the component failed, a message describing why. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.primaryStatus">primaryStatus</a></code> | <code>string</code> | The status of the trial component. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

If the component failed, a message describing why.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#message SagemakerExperimentTrialComponent#message}

---

##### `primaryStatus`<sup>Optional</sup> <a name="primaryStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.primaryStatus"></a>

```typescript
public readonly primaryStatus: string;
```

- *Type:* string

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#primary_status SagemakerExperimentTrialComponent#primary_status}

---

### SagemakerExperimentTrialComponentTags <a name="SagemakerExperimentTrialComponentTags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.Initializer"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

const sagemakerExperimentTrialComponentTags: sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#key SagemakerExperimentTrialComponent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#value SagemakerExperimentTrialComponent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerExperimentTrialComponentMetadataPropertiesOutputReference <a name="SagemakerExperimentTrialComponentMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

new sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetCommitId">resetCommitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy">resetGeneratedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitId` <a name="resetCommitId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetCommitId"></a>

```typescript
public resetCommitId(): void
```

##### `resetGeneratedBy` <a name="resetGeneratedBy" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy"></a>

```typescript
public resetGeneratedBy(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitIdInput">commitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedByInput">generatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitId">commitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedBy">generatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitIdInput`<sup>Optional</sup> <a name="commitIdInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitIdInput"></a>

```typescript
public readonly commitIdInput: string;
```

- *Type:* string

---

##### `generatedByInput`<sup>Optional</sup> <a name="generatedByInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedByInput"></a>

```typescript
public readonly generatedByInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitId"></a>

```typescript
public readonly commitId: string;
```

- *Type:* string

---

##### `generatedBy`<sup>Required</sup> <a name="generatedBy" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedBy"></a>

```typescript
public readonly generatedBy: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerExperimentTrialComponentMetadataProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

---


### SagemakerExperimentTrialComponentStatusOutputReference <a name="SagemakerExperimentTrialComponentStatusOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

new sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetPrimaryStatus">resetPrimaryStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetPrimaryStatus` <a name="resetPrimaryStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetPrimaryStatus"></a>

```typescript
public resetPrimaryStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatusInput">primaryStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatus">primaryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `primaryStatusInput`<sup>Optional</sup> <a name="primaryStatusInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatusInput"></a>

```typescript
public readonly primaryStatusInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `primaryStatus`<sup>Required</sup> <a name="primaryStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatus"></a>

```typescript
public readonly primaryStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerExperimentTrialComponentStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

---


### SagemakerExperimentTrialComponentTagsList <a name="SagemakerExperimentTrialComponentTagsList" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

new sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get"></a>

```typescript
public get(index: number): SagemakerExperimentTrialComponentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerExperimentTrialComponentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>[]

---


### SagemakerExperimentTrialComponentTagsOutputReference <a name="SagemakerExperimentTrialComponentTagsOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

new sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerExperimentTrialComponentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>

---



