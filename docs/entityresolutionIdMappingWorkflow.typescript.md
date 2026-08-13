# `entityresolutionIdMappingWorkflow` Submodule <a name="`entityresolutionIdMappingWorkflow` Submodule" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionIdMappingWorkflow <a name="EntityresolutionIdMappingWorkflow" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow awscc_entityresolution_id_mapping_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow(scope: Construct, id: string, config: EntityresolutionIdMappingWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig">EntityresolutionIdMappingWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig">EntityresolutionIdMappingWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingIncrementalRunConfig">putIdMappingIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques">putIdMappingTechniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putInputSourceConfig">putInputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putOutputSourceConfig">putOutputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetIdMappingIncrementalRunConfig">resetIdMappingIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOutputSourceConfig">resetOutputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdMappingIncrementalRunConfig` <a name="putIdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingIncrementalRunConfig"></a>

```typescript
public putIdMappingIncrementalRunConfig(value: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingIncrementalRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

---

##### `putIdMappingTechniques` <a name="putIdMappingTechniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques"></a>

```typescript
public putIdMappingTechniques(value: EntityresolutionIdMappingWorkflowIdMappingTechniques): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

---

##### `putInputSourceConfig` <a name="putInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putInputSourceConfig"></a>

```typescript
public putInputSourceConfig(value: IResolvable | EntityresolutionIdMappingWorkflowInputSourceConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putInputSourceConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]

---

##### `putOutputSourceConfig` <a name="putOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putOutputSourceConfig"></a>

```typescript
public putOutputSourceConfig(value: IResolvable | EntityresolutionIdMappingWorkflowOutputSourceConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putOutputSourceConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putTags"></a>

```typescript
public putTags(value: IResolvable | EntityresolutionIdMappingWorkflowTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIdMappingIncrementalRunConfig` <a name="resetIdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetIdMappingIncrementalRunConfig"></a>

```typescript
public resetIdMappingIncrementalRunConfig(): void
```

##### `resetOutputSourceConfig` <a name="resetOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOutputSourceConfig"></a>

```typescript
public resetOutputSourceConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isConstruct"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformElement"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformResource"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EntityresolutionIdMappingWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EntityresolutionIdMappingWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionIdMappingWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig">idMappingIncrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniques">idMappingTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfig">inputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList">EntityresolutionIdMappingWorkflowInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfig">outputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList">EntityresolutionIdMappingWorkflowOutputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList">EntityresolutionIdMappingWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowArn">workflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfigInput">idMappingIncrementalRunConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniquesInput">idMappingTechniquesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfigInput">inputSourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfigInput">outputSourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowNameInput">workflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idMappingIncrementalRunConfig`<sup>Required</sup> <a name="idMappingIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig"></a>

```typescript
public readonly idMappingIncrementalRunConfig: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a>

---

##### `idMappingTechniques`<sup>Required</sup> <a name="idMappingTechniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniques"></a>

```typescript
public readonly idMappingTechniques: EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a>

---

##### `inputSourceConfig`<sup>Required</sup> <a name="inputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfig"></a>

```typescript
public readonly inputSourceConfig: EntityresolutionIdMappingWorkflowInputSourceConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList">EntityresolutionIdMappingWorkflowInputSourceConfigList</a>

---

##### `outputSourceConfig`<sup>Required</sup> <a name="outputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfig"></a>

```typescript
public readonly outputSourceConfig: EntityresolutionIdMappingWorkflowOutputSourceConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList">EntityresolutionIdMappingWorkflowOutputSourceConfigList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tags"></a>

```typescript
public readonly tags: EntityresolutionIdMappingWorkflowTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList">EntityresolutionIdMappingWorkflowTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `workflowArn`<sup>Required</sup> <a name="workflowArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowArn"></a>

```typescript
public readonly workflowArn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idMappingIncrementalRunConfigInput`<sup>Optional</sup> <a name="idMappingIncrementalRunConfigInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfigInput"></a>

```typescript
public readonly idMappingIncrementalRunConfigInput: IResolvable | EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

---

##### `idMappingTechniquesInput`<sup>Optional</sup> <a name="idMappingTechniquesInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniquesInput"></a>

```typescript
public readonly idMappingTechniquesInput: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniques;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

---

##### `inputSourceConfigInput`<sup>Optional</sup> <a name="inputSourceConfigInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfigInput"></a>

```typescript
public readonly inputSourceConfigInput: IResolvable | EntityresolutionIdMappingWorkflowInputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]

---

##### `outputSourceConfigInput`<sup>Optional</sup> <a name="outputSourceConfigInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfigInput"></a>

```typescript
public readonly outputSourceConfigInput: IResolvable | EntityresolutionIdMappingWorkflowOutputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | EntityresolutionIdMappingWorkflowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]

---

##### `workflowNameInput`<sup>Optional</sup> <a name="workflowNameInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowNameInput"></a>

```typescript
public readonly workflowNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionIdMappingWorkflowConfig <a name="EntityresolutionIdMappingWorkflowConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionIdMappingWorkflowConfig: entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingTechniques">idMappingTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_techniques EntityresolutionIdMappingWorkflow#id_mapping_techniques}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.inputSourceConfig">inputSourceConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#input_source_config EntityresolutionIdMappingWorkflow#input_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#role_arn EntityresolutionIdMappingWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.workflowName">workflowName</a></code> | <code>string</code> | The name of the IdMappingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.description">description</a></code> | <code>string</code> | The description of the IdMappingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingIncrementalRunConfig">idMappingIncrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_incremental_run_config EntityresolutionIdMappingWorkflow#id_mapping_incremental_run_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.outputSourceConfig">outputSourceConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#output_source_config EntityresolutionIdMappingWorkflow#output_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#tags EntityresolutionIdMappingWorkflow#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idMappingTechniques`<sup>Required</sup> <a name="idMappingTechniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingTechniques"></a>

```typescript
public readonly idMappingTechniques: EntityresolutionIdMappingWorkflowIdMappingTechniques;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_techniques EntityresolutionIdMappingWorkflow#id_mapping_techniques}.

---

##### `inputSourceConfig`<sup>Required</sup> <a name="inputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.inputSourceConfig"></a>

```typescript
public readonly inputSourceConfig: IResolvable | EntityresolutionIdMappingWorkflowInputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#input_source_config EntityresolutionIdMappingWorkflow#input_source_config}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#role_arn EntityresolutionIdMappingWorkflow#role_arn}.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The name of the IdMappingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#workflow_name EntityresolutionIdMappingWorkflow#workflow_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the IdMappingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#description EntityresolutionIdMappingWorkflow#description}

---

##### `idMappingIncrementalRunConfig`<sup>Optional</sup> <a name="idMappingIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingIncrementalRunConfig"></a>

```typescript
public readonly idMappingIncrementalRunConfig: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_incremental_run_config EntityresolutionIdMappingWorkflow#id_mapping_incremental_run_config}.

---

##### `outputSourceConfig`<sup>Optional</sup> <a name="outputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.outputSourceConfig"></a>

```typescript
public readonly outputSourceConfig: IResolvable | EntityresolutionIdMappingWorkflowOutputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#output_source_config EntityresolutionIdMappingWorkflow#output_source_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | EntityresolutionIdMappingWorkflowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#tags EntityresolutionIdMappingWorkflow#tags}.

---

### EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig <a name="EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig: entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.property.incrementalRunType">incrementalRunType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#incremental_run_type EntityresolutionIdMappingWorkflow#incremental_run_type}. |

---

##### `incrementalRunType`<sup>Optional</sup> <a name="incrementalRunType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.property.incrementalRunType"></a>

```typescript
public readonly incrementalRunType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#incremental_run_type EntityresolutionIdMappingWorkflow#incremental_run_type}.

---

### EntityresolutionIdMappingWorkflowIdMappingTechniques <a name="EntityresolutionIdMappingWorkflowIdMappingTechniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionIdMappingWorkflowIdMappingTechniques: entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.idMappingType">idMappingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_type EntityresolutionIdMappingWorkflow#id_mapping_type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.normalizationVersion">normalizationVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#normalization_version EntityresolutionIdMappingWorkflow#normalization_version}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.providerProperties">providerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#provider_properties EntityresolutionIdMappingWorkflow#provider_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.ruleBasedProperties">ruleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#rule_based_properties EntityresolutionIdMappingWorkflow#rule_based_properties}. |

---

##### `idMappingType`<sup>Optional</sup> <a name="idMappingType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.idMappingType"></a>

```typescript
public readonly idMappingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_type EntityresolutionIdMappingWorkflow#id_mapping_type}.

---

##### `normalizationVersion`<sup>Optional</sup> <a name="normalizationVersion" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.normalizationVersion"></a>

```typescript
public readonly normalizationVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#normalization_version EntityresolutionIdMappingWorkflow#normalization_version}.

---

##### `providerProperties`<sup>Optional</sup> <a name="providerProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.providerProperties"></a>

```typescript
public readonly providerProperties: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#provider_properties EntityresolutionIdMappingWorkflow#provider_properties}.

---

##### `ruleBasedProperties`<sup>Optional</sup> <a name="ruleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.ruleBasedProperties"></a>

```typescript
public readonly ruleBasedProperties: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#rule_based_properties EntityresolutionIdMappingWorkflow#rule_based_properties}.

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties: entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.intermediateSourceConfiguration">intermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_source_configuration EntityresolutionIdMappingWorkflow#intermediate_source_configuration}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerConfiguration">providerConfiguration</a></code> | <code>{[ key: string ]: string}</code> | Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerServiceArn">providerServiceArn</a></code> | <code>string</code> | Arn of the Provider Service being used. |

---

##### `intermediateSourceConfiguration`<sup>Optional</sup> <a name="intermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.intermediateSourceConfiguration"></a>

```typescript
public readonly intermediateSourceConfiguration: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_source_configuration EntityresolutionIdMappingWorkflow#intermediate_source_configuration}.

---

##### `providerConfiguration`<sup>Optional</sup> <a name="providerConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerConfiguration"></a>

```typescript
public readonly providerConfiguration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#provider_configuration EntityresolutionIdMappingWorkflow#provider_configuration}

---

##### `providerServiceArn`<sup>Optional</sup> <a name="providerServiceArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerServiceArn"></a>

```typescript
public readonly providerServiceArn: string;
```

- *Type:* string

Arn of the Provider Service being used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#provider_service_arn EntityresolutionIdMappingWorkflow#provider_service_arn}

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration: entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path">intermediateS3Path</a></code> | <code>string</code> | The s3 path that would be used to stage the intermediate data being generated during workflow execution. |

---

##### `intermediateS3Path`<sup>Optional</sup> <a name="intermediateS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path"></a>

```typescript
public readonly intermediateS3Path: string;
```

- *Type:* string

The s3 path that would be used to stage the intermediate data being generated during workflow execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_s3_path EntityresolutionIdMappingWorkflow#intermediate_s3_path}

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties: entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.attributeMatchingModel">attributeMatchingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#attribute_matching_model EntityresolutionIdMappingWorkflow#attribute_matching_model}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.recordMatchingModel">recordMatchingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#record_matching_model EntityresolutionIdMappingWorkflow#record_matching_model}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.ruleDefinitionType">ruleDefinitionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#rule_definition_type EntityresolutionIdMappingWorkflow#rule_definition_type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#rules EntityresolutionIdMappingWorkflow#rules}. |

---

##### `attributeMatchingModel`<sup>Optional</sup> <a name="attributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.attributeMatchingModel"></a>

```typescript
public readonly attributeMatchingModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#attribute_matching_model EntityresolutionIdMappingWorkflow#attribute_matching_model}.

---

##### `recordMatchingModel`<sup>Optional</sup> <a name="recordMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.recordMatchingModel"></a>

```typescript
public readonly recordMatchingModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#record_matching_model EntityresolutionIdMappingWorkflow#record_matching_model}.

---

##### `ruleDefinitionType`<sup>Optional</sup> <a name="ruleDefinitionType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.ruleDefinitionType"></a>

```typescript
public readonly ruleDefinitionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#rule_definition_type EntityresolutionIdMappingWorkflow#rule_definition_type}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.rules"></a>

```typescript
public readonly rules: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#rules EntityresolutionIdMappingWorkflow#rules}.

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules: entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.matchingKeys">matchingKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#matching_keys EntityresolutionIdMappingWorkflow#matching_keys}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.ruleName">ruleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#rule_name EntityresolutionIdMappingWorkflow#rule_name}. |

---

##### `matchingKeys`<sup>Optional</sup> <a name="matchingKeys" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.matchingKeys"></a>

```typescript
public readonly matchingKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#matching_keys EntityresolutionIdMappingWorkflow#matching_keys}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#rule_name EntityresolutionIdMappingWorkflow#rule_name}.

---

### EntityresolutionIdMappingWorkflowInputSourceConfig <a name="EntityresolutionIdMappingWorkflowInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionIdMappingWorkflowInputSourceConfig: entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.inputSourceArn">inputSourceArn</a></code> | <code>string</code> | An Glue table ARN for the input source table, MatchingWorkflow arn or IdNamespace ARN. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.schemaArn">schemaArn</a></code> | <code>string</code> | The SchemaMapping arn associated with the Schema. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#type EntityresolutionIdMappingWorkflow#type}. |

---

##### `inputSourceArn`<sup>Required</sup> <a name="inputSourceArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.inputSourceArn"></a>

```typescript
public readonly inputSourceArn: string;
```

- *Type:* string

An Glue table ARN for the input source table, MatchingWorkflow arn or IdNamespace ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#input_source_arn EntityresolutionIdMappingWorkflow#input_source_arn}

---

##### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

The SchemaMapping arn associated with the Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#schema_arn EntityresolutionIdMappingWorkflow#schema_arn}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#type EntityresolutionIdMappingWorkflow#type}.

---

### EntityresolutionIdMappingWorkflowOutputSourceConfig <a name="EntityresolutionIdMappingWorkflowOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionIdMappingWorkflowOutputSourceConfig: entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.kmsArn">kmsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#kms_arn EntityresolutionIdMappingWorkflow#kms_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.outputS3Path">outputS3Path</a></code> | <code>string</code> | The S3 path to which Entity Resolution will write the output table. |

---

##### `kmsArn`<sup>Optional</sup> <a name="kmsArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.kmsArn"></a>

```typescript
public readonly kmsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#kms_arn EntityresolutionIdMappingWorkflow#kms_arn}.

---

##### `outputS3Path`<sup>Optional</sup> <a name="outputS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.outputS3Path"></a>

```typescript
public readonly outputS3Path: string;
```

- *Type:* string

The S3 path to which Entity Resolution will write the output table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#output_s3_path EntityresolutionIdMappingWorkflow#output_s3_path}

---

### EntityresolutionIdMappingWorkflowTags <a name="EntityresolutionIdMappingWorkflowTags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionIdMappingWorkflowTags: entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#key EntityresolutionIdMappingWorkflow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_id_mapping_workflow#value EntityresolutionIdMappingWorkflow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resetIncrementalRunType">resetIncrementalRunType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncrementalRunType` <a name="resetIncrementalRunType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resetIncrementalRunType"></a>

```typescript
public resetIncrementalRunType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunTypeInput">incrementalRunTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType">incrementalRunType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `incrementalRunTypeInput`<sup>Optional</sup> <a name="incrementalRunTypeInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunTypeInput"></a>

```typescript
public readonly incrementalRunTypeInput: string;
```

- *Type:* string

---

##### `incrementalRunType`<sup>Required</sup> <a name="incrementalRunType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType"></a>

```typescript
public readonly incrementalRunType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putProviderProperties">putProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties">putRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetIdMappingType">resetIdMappingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetNormalizationVersion">resetNormalizationVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetProviderProperties">resetProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetRuleBasedProperties">resetRuleBasedProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderProperties` <a name="putProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putProviderProperties"></a>

```typescript
public putProviderProperties(value: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putProviderProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

---

##### `putRuleBasedProperties` <a name="putRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties"></a>

```typescript
public putRuleBasedProperties(value: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

---

##### `resetIdMappingType` <a name="resetIdMappingType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetIdMappingType"></a>

```typescript
public resetIdMappingType(): void
```

##### `resetNormalizationVersion` <a name="resetNormalizationVersion" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetNormalizationVersion"></a>

```typescript
public resetNormalizationVersion(): void
```

##### `resetProviderProperties` <a name="resetProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetProviderProperties"></a>

```typescript
public resetProviderProperties(): void
```

##### `resetRuleBasedProperties` <a name="resetRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetRuleBasedProperties"></a>

```typescript
public resetRuleBasedProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties">providerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties">ruleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingTypeInput">idMappingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersionInput">normalizationVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerPropertiesInput">providerPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedPropertiesInput">ruleBasedPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType">idMappingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion">normalizationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerProperties`<sup>Required</sup> <a name="providerProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties"></a>

```typescript
public readonly providerProperties: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a>

---

##### `ruleBasedProperties`<sup>Required</sup> <a name="ruleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties"></a>

```typescript
public readonly ruleBasedProperties: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a>

---

##### `idMappingTypeInput`<sup>Optional</sup> <a name="idMappingTypeInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingTypeInput"></a>

```typescript
public readonly idMappingTypeInput: string;
```

- *Type:* string

---

##### `normalizationVersionInput`<sup>Optional</sup> <a name="normalizationVersionInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersionInput"></a>

```typescript
public readonly normalizationVersionInput: string;
```

- *Type:* string

---

##### `providerPropertiesInput`<sup>Optional</sup> <a name="providerPropertiesInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerPropertiesInput"></a>

```typescript
public readonly providerPropertiesInput: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

---

##### `ruleBasedPropertiesInput`<sup>Optional</sup> <a name="ruleBasedPropertiesInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedPropertiesInput"></a>

```typescript
public readonly ruleBasedPropertiesInput: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

---

##### `idMappingType`<sup>Required</sup> <a name="idMappingType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType"></a>

```typescript
public readonly idMappingType: string;
```

- *Type:* string

---

##### `normalizationVersion`<sup>Required</sup> <a name="normalizationVersion" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion"></a>

```typescript
public readonly normalizationVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniques;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path">resetIntermediateS3Path</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntermediateS3Path` <a name="resetIntermediateS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path"></a>

```typescript
public resetIntermediateS3Path(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput">intermediateS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path">intermediateS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intermediateS3PathInput`<sup>Optional</sup> <a name="intermediateS3PathInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput"></a>

```typescript
public readonly intermediateS3PathInput: string;
```

- *Type:* string

---

##### `intermediateS3Path`<sup>Required</sup> <a name="intermediateS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path"></a>

```typescript
public readonly intermediateS3Path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration">putIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration">resetIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderConfiguration">resetProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderServiceArn">resetProviderServiceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntermediateSourceConfiguration` <a name="putIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration"></a>

```typescript
public putIntermediateSourceConfiguration(value: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---

##### `resetIntermediateSourceConfiguration` <a name="resetIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration"></a>

```typescript
public resetIntermediateSourceConfiguration(): void
```

##### `resetProviderConfiguration` <a name="resetProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderConfiguration"></a>

```typescript
public resetProviderConfiguration(): void
```

##### `resetProviderServiceArn` <a name="resetProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderServiceArn"></a>

```typescript
public resetProviderServiceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration">intermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput">intermediateSourceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput">providerConfigurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput">providerServiceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration">providerConfiguration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn">providerServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intermediateSourceConfiguration`<sup>Required</sup> <a name="intermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration"></a>

```typescript
public readonly intermediateSourceConfiguration: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a>

---

##### `intermediateSourceConfigurationInput`<sup>Optional</sup> <a name="intermediateSourceConfigurationInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput"></a>

```typescript
public readonly intermediateSourceConfigurationInput: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---

##### `providerConfigurationInput`<sup>Optional</sup> <a name="providerConfigurationInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput"></a>

```typescript
public readonly providerConfigurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `providerServiceArnInput`<sup>Optional</sup> <a name="providerServiceArnInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput"></a>

```typescript
public readonly providerServiceArnInput: string;
```

- *Type:* string

---

##### `providerConfiguration`<sup>Required</sup> <a name="providerConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```typescript
public readonly providerConfiguration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `providerServiceArn`<sup>Required</sup> <a name="providerServiceArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```typescript
public readonly providerServiceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel">resetAttributeMatchingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRecordMatchingModel">resetRecordMatchingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRuleDefinitionType">resetRuleDefinitionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]

---

##### `resetAttributeMatchingModel` <a name="resetAttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel"></a>

```typescript
public resetAttributeMatchingModel(): void
```

##### `resetRecordMatchingModel` <a name="resetRecordMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRecordMatchingModel"></a>

```typescript
public resetRecordMatchingModel(): void
```

##### `resetRuleDefinitionType` <a name="resetRuleDefinitionType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRuleDefinitionType"></a>

```typescript
public resetRuleDefinitionType(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput">attributeMatchingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModelInput">recordMatchingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypeInput">ruleDefinitionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">attributeMatchingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel">recordMatchingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType">ruleDefinitionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules"></a>

```typescript
public readonly rules: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a>

---

##### `attributeMatchingModelInput`<sup>Optional</sup> <a name="attributeMatchingModelInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput"></a>

```typescript
public readonly attributeMatchingModelInput: string;
```

- *Type:* string

---

##### `recordMatchingModelInput`<sup>Optional</sup> <a name="recordMatchingModelInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModelInput"></a>

```typescript
public readonly recordMatchingModelInput: string;
```

- *Type:* string

---

##### `ruleDefinitionTypeInput`<sup>Optional</sup> <a name="ruleDefinitionTypeInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypeInput"></a>

```typescript
public readonly ruleDefinitionTypeInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]

---

##### `attributeMatchingModel`<sup>Required</sup> <a name="attributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```typescript
public readonly attributeMatchingModel: string;
```

- *Type:* string

---

##### `recordMatchingModel`<sup>Required</sup> <a name="recordMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel"></a>

```typescript
public readonly recordMatchingModel: string;
```

- *Type:* string

---

##### `ruleDefinitionType`<sup>Required</sup> <a name="ruleDefinitionType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType"></a>

```typescript
public readonly ruleDefinitionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get"></a>

```typescript
public get(index: number): EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys">resetMatchingKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchingKeys` <a name="resetMatchingKeys" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys"></a>

```typescript
public resetMatchingKeys(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput">matchingKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">matchingKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingKeysInput`<sup>Optional</sup> <a name="matchingKeysInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput"></a>

```typescript
public readonly matchingKeysInput: string[];
```

- *Type:* string[]

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `matchingKeys`<sup>Required</sup> <a name="matchingKeys" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```typescript
public readonly matchingKeys: string[];
```

- *Type:* string[]

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>

---


### EntityresolutionIdMappingWorkflowInputSourceConfigList <a name="EntityresolutionIdMappingWorkflowInputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.get"></a>

```typescript
public get(index: number): EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowInputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]

---


### EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference <a name="EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetSchemaArn">resetSchemaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchemaArn` <a name="resetSchemaArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetSchemaArn"></a>

```typescript
public resetSchemaArn(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput">inputSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArnInput">schemaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn">inputSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn">schemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputSourceArnInput`<sup>Optional</sup> <a name="inputSourceArnInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput"></a>

```typescript
public readonly inputSourceArnInput: string;
```

- *Type:* string

---

##### `schemaArnInput`<sup>Optional</sup> <a name="schemaArnInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArnInput"></a>

```typescript
public readonly schemaArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `inputSourceArn`<sup>Required</sup> <a name="inputSourceArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn"></a>

```typescript
public readonly inputSourceArn: string;
```

- *Type:* string

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowInputSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>

---


### EntityresolutionIdMappingWorkflowOutputSourceConfigList <a name="EntityresolutionIdMappingWorkflowOutputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.get"></a>

```typescript
public get(index: number): EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowOutputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]

---


### EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference <a name="EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetKmsArn">resetKmsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path">resetOutputS3Path</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsArn` <a name="resetKmsArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetKmsArn"></a>

```typescript
public resetKmsArn(): void
```

##### `resetOutputS3Path` <a name="resetOutputS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path"></a>

```typescript
public resetOutputS3Path(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput">kmsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput">outputS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn">kmsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path">outputS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsArnInput`<sup>Optional</sup> <a name="kmsArnInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput"></a>

```typescript
public readonly kmsArnInput: string;
```

- *Type:* string

---

##### `outputS3PathInput`<sup>Optional</sup> <a name="outputS3PathInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput"></a>

```typescript
public readonly outputS3PathInput: string;
```

- *Type:* string

---

##### `kmsArn`<sup>Required</sup> <a name="kmsArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn"></a>

```typescript
public readonly kmsArn: string;
```

- *Type:* string

---

##### `outputS3Path`<sup>Required</sup> <a name="outputS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path"></a>

```typescript
public readonly outputS3Path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowOutputSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>

---


### EntityresolutionIdMappingWorkflowTagsList <a name="EntityresolutionIdMappingWorkflowTagsList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.get"></a>

```typescript
public get(index: number): EntityresolutionIdMappingWorkflowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]

---


### EntityresolutionIdMappingWorkflowTagsOutputReference <a name="EntityresolutionIdMappingWorkflowTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer"></a>

```typescript
import { entityresolutionIdMappingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionIdMappingWorkflowTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>

---



