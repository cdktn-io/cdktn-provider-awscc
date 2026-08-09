# `sagemakerTrialComponent` Submodule <a name="`sagemakerTrialComponent` Submodule" id="@cdktn/provider-awscc.sagemakerTrialComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerTrialComponent <a name="SagemakerTrialComponent" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component awscc_sagemaker_trial_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

new sagemakerTrialComponent.SagemakerTrialComponent(scope: Construct, id: string, config: SagemakerTrialComponentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig">SagemakerTrialComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig">SagemakerTrialComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putInputArtifacts">putInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties">putMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putOutputArtifacts">putOutputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putStatus">putStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetInputArtifacts">resetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetMetadataProperties">resetMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOutputArtifacts">resetOutputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputArtifacts` <a name="putInputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putInputArtifacts"></a>

```typescript
public putInputArtifacts(value: IResolvable | {[ key: string ]: SagemakerTrialComponentInputArtifacts}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putInputArtifacts.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>}

---

##### `putMetadataProperties` <a name="putMetadataProperties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties"></a>

```typescript
public putMetadataProperties(value: SagemakerTrialComponentMetadataProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

---

##### `putOutputArtifacts` <a name="putOutputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putOutputArtifacts"></a>

```typescript
public putOutputArtifacts(value: IResolvable | {[ key: string ]: SagemakerTrialComponentOutputArtifacts}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putOutputArtifacts.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>}

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putParameters"></a>

```typescript
public putParameters(value: IResolvable | {[ key: string ]: SagemakerTrialComponentParameters}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>}

---

##### `putStatus` <a name="putStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putStatus"></a>

```typescript
public putStatus(value: SagemakerTrialComponentStatus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerTrialComponentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInputArtifacts` <a name="resetInputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetInputArtifacts"></a>

```typescript
public resetInputArtifacts(): void
```

##### `resetMetadataProperties` <a name="resetMetadataProperties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetMetadataProperties"></a>

```typescript
public resetMetadataProperties(): void
```

##### `resetOutputArtifacts` <a name="resetOutputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOutputArtifacts"></a>

```typescript
public resetOutputArtifacts(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerTrialComponent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isConstruct"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

sagemakerTrialComponent.SagemakerTrialComponent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformElement"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

sagemakerTrialComponent.SagemakerTrialComponent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformResource"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

sagemakerTrialComponent.SagemakerTrialComponent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerTrialComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerTrialComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerTrialComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerTrialComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifacts">inputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap">SagemakerTrialComponentInputArtifactsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lineageGroupArn">lineageGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataProperties">metadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference">SagemakerTrialComponentMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifacts">outputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap">SagemakerTrialComponentOutputArtifactsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap">SagemakerTrialComponentParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference">SagemakerTrialComponentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList">SagemakerTrialComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentArn">trialComponentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifactsInput">inputArtifactsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataPropertiesInput">metadataPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifactsInput">outputArtifactsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.statusInput">statusInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentNameInput">trialComponentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentName">trialComponentName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: SagemakerTrialComponentInputArtifactsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap">SagemakerTrialComponentInputArtifactsMap</a>

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `lineageGroupArn`<sup>Required</sup> <a name="lineageGroupArn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lineageGroupArn"></a>

```typescript
public readonly lineageGroupArn: string;
```

- *Type:* string

---

##### `metadataProperties`<sup>Required</sup> <a name="metadataProperties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataProperties"></a>

```typescript
public readonly metadataProperties: SagemakerTrialComponentMetadataPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference">SagemakerTrialComponentMetadataPropertiesOutputReference</a>

---

##### `outputArtifacts`<sup>Required</sup> <a name="outputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifacts"></a>

```typescript
public readonly outputArtifacts: SagemakerTrialComponentOutputArtifactsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap">SagemakerTrialComponentOutputArtifactsMap</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parameters"></a>

```typescript
public readonly parameters: SagemakerTrialComponentParametersMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap">SagemakerTrialComponentParametersMap</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.status"></a>

```typescript
public readonly status: SagemakerTrialComponentStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference">SagemakerTrialComponentStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tags"></a>

```typescript
public readonly tags: SagemakerTrialComponentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList">SagemakerTrialComponentTagsList</a>

---

##### `trialComponentArn`<sup>Required</sup> <a name="trialComponentArn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentArn"></a>

```typescript
public readonly trialComponentArn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `inputArtifactsInput`<sup>Optional</sup> <a name="inputArtifactsInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifactsInput"></a>

```typescript
public readonly inputArtifactsInput: IResolvable | {[ key: string ]: SagemakerTrialComponentInputArtifacts};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>}

---

##### `metadataPropertiesInput`<sup>Optional</sup> <a name="metadataPropertiesInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataPropertiesInput"></a>

```typescript
public readonly metadataPropertiesInput: IResolvable | SagemakerTrialComponentMetadataProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

---

##### `outputArtifactsInput`<sup>Optional</sup> <a name="outputArtifactsInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifactsInput"></a>

```typescript
public readonly outputArtifactsInput: IResolvable | {[ key: string ]: SagemakerTrialComponentOutputArtifacts};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>}

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | {[ key: string ]: SagemakerTrialComponentParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>}

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.statusInput"></a>

```typescript
public readonly statusInput: IResolvable | SagemakerTrialComponentStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerTrialComponentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]

---

##### `trialComponentNameInput`<sup>Optional</sup> <a name="trialComponentNameInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentNameInput"></a>

```typescript
public readonly trialComponentNameInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `trialComponentName`<sup>Required</sup> <a name="trialComponentName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentName"></a>

```typescript
public readonly trialComponentName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerTrialComponentConfig <a name="SagemakerTrialComponentConfig" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

const sagemakerTrialComponentConfig: sagemakerTrialComponent.SagemakerTrialComponentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.trialComponentName">trialComponentName</a></code> | <code>string</code> | The name of the trial component. Must be unique in your AWS account and is not case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.displayName">displayName</a></code> | <code>string</code> | The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.inputArtifacts">inputArtifacts</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>}</code> | The input artifacts for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.metadataProperties">metadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.outputArtifacts">outputArtifacts</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>}</code> | The output artifacts for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>}</code> | The hyperparameters for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a></code> | The status of the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]</code> | A list of tags to associate with the trial component. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `trialComponentName`<sup>Required</sup> <a name="trialComponentName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.trialComponentName"></a>

```typescript
public readonly trialComponentName: string;
```

- *Type:* string

The name of the trial component. Must be unique in your AWS account and is not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#trial_component_name SagemakerTrialComponent#trial_component_name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#display_name SagemakerTrialComponent#display_name}

---

##### `inputArtifacts`<sup>Optional</sup> <a name="inputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: IResolvable | {[ key: string ]: SagemakerTrialComponentInputArtifacts};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>}

The input artifacts for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#input_artifacts SagemakerTrialComponent#input_artifacts}

---

##### `metadataProperties`<sup>Optional</sup> <a name="metadataProperties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.metadataProperties"></a>

```typescript
public readonly metadataProperties: SagemakerTrialComponentMetadataProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#metadata_properties SagemakerTrialComponent#metadata_properties}

---

##### `outputArtifacts`<sup>Optional</sup> <a name="outputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.outputArtifacts"></a>

```typescript
public readonly outputArtifacts: IResolvable | {[ key: string ]: SagemakerTrialComponentOutputArtifacts};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>}

The output artifacts for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#output_artifacts SagemakerTrialComponent#output_artifacts}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | {[ key: string ]: SagemakerTrialComponentParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>}

The hyperparameters for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#parameters SagemakerTrialComponent#parameters}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.status"></a>

```typescript
public readonly status: SagemakerTrialComponentStatus;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#status SagemakerTrialComponent#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerTrialComponentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]

A list of tags to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#tags SagemakerTrialComponent#tags}

---

### SagemakerTrialComponentInputArtifacts <a name="SagemakerTrialComponentInputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

const sagemakerTrialComponentInputArtifacts: sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.mediaType">mediaType</a></code> | <code>string</code> | The media type of the artifact. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.value">value</a></code> | <code>string</code> | The location of the artifact. |

---

##### `mediaType`<sup>Optional</sup> <a name="mediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.mediaType"></a>

```typescript
public readonly mediaType: string;
```

- *Type:* string

The media type of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#media_type SagemakerTrialComponent#media_type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The location of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}

---

### SagemakerTrialComponentMetadataProperties <a name="SagemakerTrialComponentMetadataProperties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

const sagemakerTrialComponentMetadataProperties: sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.commitId">commitId</a></code> | <code>string</code> | The commit ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.generatedBy">generatedBy</a></code> | <code>string</code> | The entity this entity was generated by. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.projectId">projectId</a></code> | <code>string</code> | The project ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.repository">repository</a></code> | <code>string</code> | The repository. |

---

##### `commitId`<sup>Optional</sup> <a name="commitId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.commitId"></a>

```typescript
public readonly commitId: string;
```

- *Type:* string

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#commit_id SagemakerTrialComponent#commit_id}

---

##### `generatedBy`<sup>Optional</sup> <a name="generatedBy" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.generatedBy"></a>

```typescript
public readonly generatedBy: string;
```

- *Type:* string

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#generated_by SagemakerTrialComponent#generated_by}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#project_id SagemakerTrialComponent#project_id}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#repository SagemakerTrialComponent#repository}

---

### SagemakerTrialComponentOutputArtifacts <a name="SagemakerTrialComponentOutputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

const sagemakerTrialComponentOutputArtifacts: sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.mediaType">mediaType</a></code> | <code>string</code> | The media type of the artifact. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.value">value</a></code> | <code>string</code> | The location of the artifact. |

---

##### `mediaType`<sup>Optional</sup> <a name="mediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.mediaType"></a>

```typescript
public readonly mediaType: string;
```

- *Type:* string

The media type of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#media_type SagemakerTrialComponent#media_type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The location of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}

---

### SagemakerTrialComponentParameters <a name="SagemakerTrialComponentParameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

const sagemakerTrialComponentParameters: sagemakerTrialComponent.SagemakerTrialComponentParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.numberValue">numberValue</a></code> | <code>number</code> | The numeric value of a numeric hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.stringValue">stringValue</a></code> | <code>string</code> | The string value of a categorical hyperparameter. |

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

The numeric value of a numeric hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#number_value SagemakerTrialComponent#number_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

The string value of a categorical hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#string_value SagemakerTrialComponent#string_value}

---

### SagemakerTrialComponentStatus <a name="SagemakerTrialComponentStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

const sagemakerTrialComponentStatus: sagemakerTrialComponent.SagemakerTrialComponentStatus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.message">message</a></code> | <code>string</code> | If the component failed, a message describing why. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.primaryStatus">primaryStatus</a></code> | <code>string</code> | The status of the trial component. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

If the component failed, a message describing why.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#message SagemakerTrialComponent#message}

---

##### `primaryStatus`<sup>Optional</sup> <a name="primaryStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.primaryStatus"></a>

```typescript
public readonly primaryStatus: string;
```

- *Type:* string

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#primary_status SagemakerTrialComponent#primary_status}

---

### SagemakerTrialComponentTags <a name="SagemakerTrialComponentTags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

const sagemakerTrialComponentTags: sagemakerTrialComponent.SagemakerTrialComponentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#key SagemakerTrialComponent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerTrialComponentInputArtifactsMap <a name="SagemakerTrialComponentInputArtifactsMap" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

new sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.get"></a>

```typescript
public get(key: string): SagemakerTrialComponentInputArtifactsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: SagemakerTrialComponentInputArtifacts};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>}

---


### SagemakerTrialComponentInputArtifactsOutputReference <a name="SagemakerTrialComponentInputArtifactsOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

new sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetMediaType">resetMediaType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMediaType` <a name="resetMediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetMediaType"></a>

```typescript
public resetMediaType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaTypeInput">mediaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaType">mediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mediaTypeInput`<sup>Optional</sup> <a name="mediaTypeInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaTypeInput"></a>

```typescript
public readonly mediaTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `mediaType`<sup>Required</sup> <a name="mediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaType"></a>

```typescript
public readonly mediaType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerTrialComponentInputArtifacts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>

---


### SagemakerTrialComponentMetadataPropertiesOutputReference <a name="SagemakerTrialComponentMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

new sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetCommitId">resetCommitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy">resetGeneratedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitId` <a name="resetCommitId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetCommitId"></a>

```typescript
public resetCommitId(): void
```

##### `resetGeneratedBy` <a name="resetGeneratedBy" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy"></a>

```typescript
public resetGeneratedBy(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitIdInput">commitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedByInput">generatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitId">commitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedBy">generatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitIdInput`<sup>Optional</sup> <a name="commitIdInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitIdInput"></a>

```typescript
public readonly commitIdInput: string;
```

- *Type:* string

---

##### `generatedByInput`<sup>Optional</sup> <a name="generatedByInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedByInput"></a>

```typescript
public readonly generatedByInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitId"></a>

```typescript
public readonly commitId: string;
```

- *Type:* string

---

##### `generatedBy`<sup>Required</sup> <a name="generatedBy" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedBy"></a>

```typescript
public readonly generatedBy: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerTrialComponentMetadataProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

---


### SagemakerTrialComponentOutputArtifactsMap <a name="SagemakerTrialComponentOutputArtifactsMap" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

new sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.get"></a>

```typescript
public get(key: string): SagemakerTrialComponentOutputArtifactsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: SagemakerTrialComponentOutputArtifacts};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>}

---


### SagemakerTrialComponentOutputArtifactsOutputReference <a name="SagemakerTrialComponentOutputArtifactsOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

new sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetMediaType">resetMediaType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMediaType` <a name="resetMediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetMediaType"></a>

```typescript
public resetMediaType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaTypeInput">mediaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaType">mediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mediaTypeInput`<sup>Optional</sup> <a name="mediaTypeInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaTypeInput"></a>

```typescript
public readonly mediaTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `mediaType`<sup>Required</sup> <a name="mediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaType"></a>

```typescript
public readonly mediaType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerTrialComponentOutputArtifacts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>

---


### SagemakerTrialComponentParametersMap <a name="SagemakerTrialComponentParametersMap" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

new sagemakerTrialComponent.SagemakerTrialComponentParametersMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.get"></a>

```typescript
public get(key: string): SagemakerTrialComponentParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: SagemakerTrialComponentParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>}

---


### SagemakerTrialComponentParametersOutputReference <a name="SagemakerTrialComponentParametersOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

new sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetNumberValue"></a>

```typescript
public resetNumberValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValue">numberValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValueInput"></a>

```typescript
public readonly numberValueInput: number;
```

- *Type:* number

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerTrialComponentParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>

---


### SagemakerTrialComponentStatusOutputReference <a name="SagemakerTrialComponentStatusOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

new sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetPrimaryStatus">resetPrimaryStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetPrimaryStatus` <a name="resetPrimaryStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetPrimaryStatus"></a>

```typescript
public resetPrimaryStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatusInput">primaryStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatus">primaryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `primaryStatusInput`<sup>Optional</sup> <a name="primaryStatusInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatusInput"></a>

```typescript
public readonly primaryStatusInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `primaryStatus`<sup>Required</sup> <a name="primaryStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatus"></a>

```typescript
public readonly primaryStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerTrialComponentStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

---


### SagemakerTrialComponentTagsList <a name="SagemakerTrialComponentTagsList" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

new sagemakerTrialComponent.SagemakerTrialComponentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.get"></a>

```typescript
public get(index: number): SagemakerTrialComponentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerTrialComponentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]

---


### SagemakerTrialComponentTagsOutputReference <a name="SagemakerTrialComponentTagsOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerTrialComponent } from '@cdktn/provider-awscc'

new sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerTrialComponentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>

---



