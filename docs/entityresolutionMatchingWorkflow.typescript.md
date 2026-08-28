# `entityresolutionMatchingWorkflow` Submodule <a name="`entityresolutionMatchingWorkflow` Submodule" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionMatchingWorkflow <a name="EntityresolutionMatchingWorkflow" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow awscc_entityresolution_matching_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow(scope: Construct, id: string, config: EntityresolutionMatchingWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig">EntityresolutionMatchingWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig">EntityresolutionMatchingWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putIncrementalRunConfig">putIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putInputSourceConfig">putInputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putOutputSourceConfig">putOutputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putResolutionTechniques">putResolutionTechniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetIncrementalRunConfig">resetIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIncrementalRunConfig` <a name="putIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putIncrementalRunConfig"></a>

```typescript
public putIncrementalRunConfig(value: EntityresolutionMatchingWorkflowIncrementalRunConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putIncrementalRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a>

---

##### `putInputSourceConfig` <a name="putInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putInputSourceConfig"></a>

```typescript
public putInputSourceConfig(value: IResolvable | EntityresolutionMatchingWorkflowInputSourceConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putInputSourceConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>[]

---

##### `putOutputSourceConfig` <a name="putOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putOutputSourceConfig"></a>

```typescript
public putOutputSourceConfig(value: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putOutputSourceConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>[]

---

##### `putResolutionTechniques` <a name="putResolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putResolutionTechniques"></a>

```typescript
public putResolutionTechniques(value: EntityresolutionMatchingWorkflowResolutionTechniques): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putResolutionTechniques.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putTags"></a>

```typescript
public putTags(value: IResolvable | EntityresolutionMatchingWorkflowTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIncrementalRunConfig` <a name="resetIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetIncrementalRunConfig"></a>

```typescript
public resetIncrementalRunConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionMatchingWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isConstruct"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformElement"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformResource"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EntityresolutionMatchingWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EntityresolutionMatchingWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EntityresolutionMatchingWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionMatchingWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfig">incrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference">EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfig">inputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList">EntityresolutionMatchingWorkflowInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfig">outputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList">EntityresolutionMatchingWorkflowOutputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniques">resolutionTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList">EntityresolutionMatchingWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowArn">workflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfigInput">incrementalRunConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfigInput">inputSourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfigInput">outputSourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniquesInput">resolutionTechniquesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowNameInput">workflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `incrementalRunConfig`<sup>Required</sup> <a name="incrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfig"></a>

```typescript
public readonly incrementalRunConfig: EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference">EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference</a>

---

##### `inputSourceConfig`<sup>Required</sup> <a name="inputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfig"></a>

```typescript
public readonly inputSourceConfig: EntityresolutionMatchingWorkflowInputSourceConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList">EntityresolutionMatchingWorkflowInputSourceConfigList</a>

---

##### `outputSourceConfig`<sup>Required</sup> <a name="outputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfig"></a>

```typescript
public readonly outputSourceConfig: EntityresolutionMatchingWorkflowOutputSourceConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList">EntityresolutionMatchingWorkflowOutputSourceConfigList</a>

---

##### `resolutionTechniques`<sup>Required</sup> <a name="resolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniques"></a>

```typescript
public readonly resolutionTechniques: EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tags"></a>

```typescript
public readonly tags: EntityresolutionMatchingWorkflowTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList">EntityresolutionMatchingWorkflowTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `workflowArn`<sup>Required</sup> <a name="workflowArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowArn"></a>

```typescript
public readonly workflowArn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `incrementalRunConfigInput`<sup>Optional</sup> <a name="incrementalRunConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfigInput"></a>

```typescript
public readonly incrementalRunConfigInput: IResolvable | EntityresolutionMatchingWorkflowIncrementalRunConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a>

---

##### `inputSourceConfigInput`<sup>Optional</sup> <a name="inputSourceConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfigInput"></a>

```typescript
public readonly inputSourceConfigInput: IResolvable | EntityresolutionMatchingWorkflowInputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>[]

---

##### `outputSourceConfigInput`<sup>Optional</sup> <a name="outputSourceConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfigInput"></a>

```typescript
public readonly outputSourceConfigInput: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>[]

---

##### `resolutionTechniquesInput`<sup>Optional</sup> <a name="resolutionTechniquesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniquesInput"></a>

```typescript
public readonly resolutionTechniquesInput: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniques;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | EntityresolutionMatchingWorkflowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>[]

---

##### `workflowNameInput`<sup>Optional</sup> <a name="workflowNameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowNameInput"></a>

```typescript
public readonly workflowNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionMatchingWorkflowConfig <a name="EntityresolutionMatchingWorkflowConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowConfig: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.inputSourceConfig">inputSourceConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#input_source_config EntityresolutionMatchingWorkflow#input_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.outputSourceConfig">outputSourceConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output_source_config EntityresolutionMatchingWorkflow#output_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.resolutionTechniques">resolutionTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#resolution_techniques EntityresolutionMatchingWorkflow#resolution_techniques}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#role_arn EntityresolutionMatchingWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.workflowName">workflowName</a></code> | <code>string</code> | The name of the MatchingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.description">description</a></code> | <code>string</code> | The description of the MatchingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.incrementalRunConfig">incrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#incremental_run_config EntityresolutionMatchingWorkflow#incremental_run_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#tags EntityresolutionMatchingWorkflow#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `inputSourceConfig`<sup>Required</sup> <a name="inputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.inputSourceConfig"></a>

```typescript
public readonly inputSourceConfig: IResolvable | EntityresolutionMatchingWorkflowInputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#input_source_config EntityresolutionMatchingWorkflow#input_source_config}.

---

##### `outputSourceConfig`<sup>Required</sup> <a name="outputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.outputSourceConfig"></a>

```typescript
public readonly outputSourceConfig: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output_source_config EntityresolutionMatchingWorkflow#output_source_config}.

---

##### `resolutionTechniques`<sup>Required</sup> <a name="resolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.resolutionTechniques"></a>

```typescript
public readonly resolutionTechniques: EntityresolutionMatchingWorkflowResolutionTechniques;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#resolution_techniques EntityresolutionMatchingWorkflow#resolution_techniques}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#role_arn EntityresolutionMatchingWorkflow#role_arn}.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The name of the MatchingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#workflow_name EntityresolutionMatchingWorkflow#workflow_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the MatchingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#description EntityresolutionMatchingWorkflow#description}

---

##### `incrementalRunConfig`<sup>Optional</sup> <a name="incrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.incrementalRunConfig"></a>

```typescript
public readonly incrementalRunConfig: EntityresolutionMatchingWorkflowIncrementalRunConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#incremental_run_config EntityresolutionMatchingWorkflow#incremental_run_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | EntityresolutionMatchingWorkflowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#tags EntityresolutionMatchingWorkflow#tags}.

---

### EntityresolutionMatchingWorkflowIncrementalRunConfig <a name="EntityresolutionMatchingWorkflowIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowIncrementalRunConfig: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig.property.incrementalRunType">incrementalRunType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#incremental_run_type EntityresolutionMatchingWorkflow#incremental_run_type}. |

---

##### `incrementalRunType`<sup>Optional</sup> <a name="incrementalRunType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig.property.incrementalRunType"></a>

```typescript
public readonly incrementalRunType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#incremental_run_type EntityresolutionMatchingWorkflow#incremental_run_type}.

---

### EntityresolutionMatchingWorkflowInputSourceConfig <a name="EntityresolutionMatchingWorkflowInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowInputSourceConfig: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.inputSourceArn">inputSourceArn</a></code> | <code>string</code> | An Glue table ARN for the input source table. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.schemaArn">schemaArn</a></code> | <code>string</code> | The SchemaMapping arn associated with the Schema. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.applyNormalization">applyNormalization</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}. |

---

##### `inputSourceArn`<sup>Required</sup> <a name="inputSourceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.inputSourceArn"></a>

```typescript
public readonly inputSourceArn: string;
```

- *Type:* string

An Glue table ARN for the input source table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#input_source_arn EntityresolutionMatchingWorkflow#input_source_arn}

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

The SchemaMapping arn associated with the Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#schema_arn EntityresolutionMatchingWorkflow#schema_arn}

---

##### `applyNormalization`<sup>Optional</sup> <a name="applyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.applyNormalization"></a>

```typescript
public readonly applyNormalization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}.

---

### EntityresolutionMatchingWorkflowOutputSourceConfig <a name="EntityresolutionMatchingWorkflowOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowOutputSourceConfig: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.output">output</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output EntityresolutionMatchingWorkflow#output}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.applyNormalization">applyNormalization</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.customerProfilesIntegrationConfig">customerProfilesIntegrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a></code> | The Customer Profiles integration configuration for the output source. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.kmsArn">kmsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#kms_arn EntityresolutionMatchingWorkflow#kms_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.outputS3Path">outputS3Path</a></code> | <code>string</code> | The S3 path to which Entity Resolution will write the output table. |

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.output"></a>

```typescript
public readonly output: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfigOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output EntityresolutionMatchingWorkflow#output}.

---

##### `applyNormalization`<sup>Optional</sup> <a name="applyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.applyNormalization"></a>

```typescript
public readonly applyNormalization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}.

---

##### `customerProfilesIntegrationConfig`<sup>Optional</sup> <a name="customerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.customerProfilesIntegrationConfig"></a>

```typescript
public readonly customerProfilesIntegrationConfig: EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

The Customer Profiles integration configuration for the output source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#customer_profiles_integration_config EntityresolutionMatchingWorkflow#customer_profiles_integration_config}

---

##### `kmsArn`<sup>Optional</sup> <a name="kmsArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.kmsArn"></a>

```typescript
public readonly kmsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#kms_arn EntityresolutionMatchingWorkflow#kms_arn}.

---

##### `outputS3Path`<sup>Optional</sup> <a name="outputS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.outputS3Path"></a>

```typescript
public readonly outputS3Path: string;
```

- *Type:* string

The S3 path to which Entity Resolution will write the output table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output_s3_path EntityresolutionMatchingWorkflow#output_s3_path}

---

### EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig <a name="EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.domainArn">domainArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Customer Profiles domain. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.objectTypeArn">objectTypeArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Customer Profiles object type. |

---

##### `domainArn`<sup>Optional</sup> <a name="domainArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Customer Profiles domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#domain_arn EntityresolutionMatchingWorkflow#domain_arn}

---

##### `objectTypeArn`<sup>Optional</sup> <a name="objectTypeArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.objectTypeArn"></a>

```typescript
public readonly objectTypeArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Customer Profiles object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#object_type_arn EntityresolutionMatchingWorkflow#object_type_arn}

---

### EntityresolutionMatchingWorkflowOutputSourceConfigOutput <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowOutputSourceConfigOutput: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#name EntityresolutionMatchingWorkflow#name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.hashed">hashed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#hashed EntityresolutionMatchingWorkflow#hashed}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#name EntityresolutionMatchingWorkflow#name}.

---

##### `hashed`<sup>Optional</sup> <a name="hashed" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.hashed"></a>

```typescript
public readonly hashed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#hashed EntityresolutionMatchingWorkflow#hashed}.

---

### EntityresolutionMatchingWorkflowResolutionTechniques <a name="EntityresolutionMatchingWorkflowResolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowResolutionTechniques: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.enableRealTimeMatching">enableRealTimeMatching</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables the workflow to use real-time matching. Can only be set on creation for RULE_MATCHING workflows that define RuleConditionProperties. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.providerProperties">providerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#provider_properties EntityresolutionMatchingWorkflow#provider_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.resolutionType">resolutionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#resolution_type EntityresolutionMatchingWorkflow#resolution_type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleBasedProperties">ruleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_based_properties EntityresolutionMatchingWorkflow#rule_based_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleConditionProperties">ruleConditionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_condition_properties EntityresolutionMatchingWorkflow#rule_condition_properties}. |

---

##### `enableRealTimeMatching`<sup>Optional</sup> <a name="enableRealTimeMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.enableRealTimeMatching"></a>

```typescript
public readonly enableRealTimeMatching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables the workflow to use real-time matching. Can only be set on creation for RULE_MATCHING workflows that define RuleConditionProperties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#enable_real_time_matching EntityresolutionMatchingWorkflow#enable_real_time_matching}

---

##### `providerProperties`<sup>Optional</sup> <a name="providerProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.providerProperties"></a>

```typescript
public readonly providerProperties: EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#provider_properties EntityresolutionMatchingWorkflow#provider_properties}.

---

##### `resolutionType`<sup>Optional</sup> <a name="resolutionType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.resolutionType"></a>

```typescript
public readonly resolutionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#resolution_type EntityresolutionMatchingWorkflow#resolution_type}.

---

##### `ruleBasedProperties`<sup>Optional</sup> <a name="ruleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleBasedProperties"></a>

```typescript
public readonly ruleBasedProperties: EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_based_properties EntityresolutionMatchingWorkflow#rule_based_properties}.

---

##### `ruleConditionProperties`<sup>Optional</sup> <a name="ruleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleConditionProperties"></a>

```typescript
public readonly ruleConditionProperties: EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_condition_properties EntityresolutionMatchingWorkflow#rule_condition_properties}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowResolutionTechniquesProviderProperties: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.intermediateSourceConfiguration">intermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#intermediate_source_configuration EntityresolutionMatchingWorkflow#intermediate_source_configuration}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerConfiguration">providerConfiguration</a></code> | <code>{[ key: string ]: string}</code> | Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerServiceArn">providerServiceArn</a></code> | <code>string</code> | Arn of the Provider service being used. |

---

##### `intermediateSourceConfiguration`<sup>Optional</sup> <a name="intermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.intermediateSourceConfiguration"></a>

```typescript
public readonly intermediateSourceConfiguration: EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#intermediate_source_configuration EntityresolutionMatchingWorkflow#intermediate_source_configuration}.

---

##### `providerConfiguration`<sup>Optional</sup> <a name="providerConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerConfiguration"></a>

```typescript
public readonly providerConfiguration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#provider_configuration EntityresolutionMatchingWorkflow#provider_configuration}

---

##### `providerServiceArn`<sup>Optional</sup> <a name="providerServiceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerServiceArn"></a>

```typescript
public readonly providerServiceArn: string;
```

- *Type:* string

Arn of the Provider service being used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#provider_service_arn EntityresolutionMatchingWorkflow#provider_service_arn}

---

### EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path">intermediateS3Path</a></code> | <code>string</code> | The s3 path that would be used to stage the intermediate data being generated during workflow execution. |

---

##### `intermediateS3Path`<sup>Optional</sup> <a name="intermediateS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path"></a>

```typescript
public readonly intermediateS3Path: string;
```

- *Type:* string

The s3 path that would be used to stage the intermediate data being generated during workflow execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#intermediate_s3_path EntityresolutionMatchingWorkflow#intermediate_s3_path}

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.attributeMatchingModel">attributeMatchingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#attribute_matching_model EntityresolutionMatchingWorkflow#attribute_matching_model}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.matchPurpose">matchPurpose</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#match_purpose EntityresolutionMatchingWorkflow#match_purpose}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}. |

---

##### `attributeMatchingModel`<sup>Optional</sup> <a name="attributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.attributeMatchingModel"></a>

```typescript
public readonly attributeMatchingModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#attribute_matching_model EntityresolutionMatchingWorkflow#attribute_matching_model}.

---

##### `matchPurpose`<sup>Optional</sup> <a name="matchPurpose" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.matchPurpose"></a>

```typescript
public readonly matchPurpose: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#match_purpose EntityresolutionMatchingWorkflow#match_purpose}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.rules"></a>

```typescript
public readonly rules: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.matchingKeys">matchingKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#matching_keys EntityresolutionMatchingWorkflow#matching_keys}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.ruleName">ruleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}. |

---

##### `matchingKeys`<sup>Optional</sup> <a name="matchingKeys" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.matchingKeys"></a>

```typescript
public readonly matchingKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#matching_keys EntityresolutionMatchingWorkflow#matching_keys}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.matchingConfig">matchingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a></code> | Configuration for matching behavior within rule condition properties. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}. |

---

##### `matchingConfig`<sup>Optional</sup> <a name="matchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.matchingConfig"></a>

```typescript
public readonly matchingConfig: EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

Configuration for matching behavior within rule condition properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#matching_config EntityresolutionMatchingWorkflow#matching_config}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.rules"></a>

```typescript
public readonly rules: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.property.enableTransitiveMatching">enableTransitiveMatching</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables transitive matching to process records across all rule levels and connect unmatched records to existing match groups. |

---

##### `enableTransitiveMatching`<sup>Optional</sup> <a name="enableTransitiveMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.property.enableTransitiveMatching"></a>

```typescript
public readonly enableTransitiveMatching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables transitive matching to process records across all rule levels and connect unmatched records to existing match groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#enable_transitive_matching EntityresolutionMatchingWorkflow#enable_transitive_matching}

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#condition EntityresolutionMatchingWorkflow#condition}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.ruleName">ruleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#condition EntityresolutionMatchingWorkflow#condition}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}.

---

### EntityresolutionMatchingWorkflowTags <a name="EntityresolutionMatchingWorkflowTags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

const entityresolutionMatchingWorkflowTags: entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#key EntityresolutionMatchingWorkflow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#value EntityresolutionMatchingWorkflow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference <a name="EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resetIncrementalRunType">resetIncrementalRunType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncrementalRunType` <a name="resetIncrementalRunType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resetIncrementalRunType"></a>

```typescript
public resetIncrementalRunType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunTypeInput">incrementalRunTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunType">incrementalRunType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `incrementalRunTypeInput`<sup>Optional</sup> <a name="incrementalRunTypeInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunTypeInput"></a>

```typescript
public readonly incrementalRunTypeInput: string;
```

- *Type:* string

---

##### `incrementalRunType`<sup>Required</sup> <a name="incrementalRunType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunType"></a>

```typescript
public readonly incrementalRunType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowIncrementalRunConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a>

---


### EntityresolutionMatchingWorkflowInputSourceConfigList <a name="EntityresolutionMatchingWorkflowInputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.get"></a>

```typescript
public get(index: number): EntityresolutionMatchingWorkflowInputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowInputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>[]

---


### EntityresolutionMatchingWorkflowInputSourceConfigOutputReference <a name="EntityresolutionMatchingWorkflowInputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resetApplyNormalization">resetApplyNormalization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplyNormalization` <a name="resetApplyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resetApplyNormalization"></a>

```typescript
public resetApplyNormalization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalizationInput">applyNormalizationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput">inputSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArnInput">schemaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalization">applyNormalization</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArn">inputSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArn">schemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyNormalizationInput`<sup>Optional</sup> <a name="applyNormalizationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalizationInput"></a>

```typescript
public readonly applyNormalizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputSourceArnInput`<sup>Optional</sup> <a name="inputSourceArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput"></a>

```typescript
public readonly inputSourceArnInput: string;
```

- *Type:* string

---

##### `schemaArnInput`<sup>Optional</sup> <a name="schemaArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArnInput"></a>

```typescript
public readonly schemaArnInput: string;
```

- *Type:* string

---

##### `applyNormalization`<sup>Required</sup> <a name="applyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalization"></a>

```typescript
public readonly applyNormalization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputSourceArn`<sup>Required</sup> <a name="inputSourceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArn"></a>

```typescript
public readonly inputSourceArn: string;
```

- *Type:* string

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowInputSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>

---


### EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference <a name="EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetDomainArn">resetDomainArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetObjectTypeArn">resetObjectTypeArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainArn` <a name="resetDomainArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetDomainArn"></a>

```typescript
public resetDomainArn(): void
```

##### `resetObjectTypeArn` <a name="resetObjectTypeArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetObjectTypeArn"></a>

```typescript
public resetObjectTypeArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArnInput">domainArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArnInput">objectTypeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArn">domainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArn">objectTypeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainArnInput`<sup>Optional</sup> <a name="domainArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArnInput"></a>

```typescript
public readonly domainArnInput: string;
```

- *Type:* string

---

##### `objectTypeArnInput`<sup>Optional</sup> <a name="objectTypeArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArnInput"></a>

```typescript
public readonly objectTypeArnInput: string;
```

- *Type:* string

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

---

##### `objectTypeArn`<sup>Required</sup> <a name="objectTypeArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArn"></a>

```typescript
public readonly objectTypeArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

---


### EntityresolutionMatchingWorkflowOutputSourceConfigList <a name="EntityresolutionMatchingWorkflowOutputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.get"></a>

```typescript
public get(index: number): EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>[]

---


### EntityresolutionMatchingWorkflowOutputSourceConfigOutputList <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutputList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get"></a>

```typescript
public get(index: number): EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfigOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>[]

---


### EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resetHashed">resetHashed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHashed` <a name="resetHashed" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resetHashed"></a>

```typescript
public resetHashed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashedInput">hashedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashed">hashed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hashedInput`<sup>Optional</sup> <a name="hashedInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashedInput"></a>

```typescript
public readonly hashedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `hashed`<sup>Required</sup> <a name="hashed" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashed"></a>

```typescript
public readonly hashed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfigOutput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>

---


### EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putCustomerProfilesIntegrationConfig">putCustomerProfilesIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetApplyNormalization">resetApplyNormalization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetCustomerProfilesIntegrationConfig">resetCustomerProfilesIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetKmsArn">resetKmsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path">resetOutputS3Path</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerProfilesIntegrationConfig` <a name="putCustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putCustomerProfilesIntegrationConfig"></a>

```typescript
public putCustomerProfilesIntegrationConfig(value: EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putCustomerProfilesIntegrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

---

##### `putOutput` <a name="putOutput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putOutput"></a>

```typescript
public putOutput(value: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfigOutput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putOutput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>[]

---

##### `resetApplyNormalization` <a name="resetApplyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetApplyNormalization"></a>

```typescript
public resetApplyNormalization(): void
```

##### `resetCustomerProfilesIntegrationConfig` <a name="resetCustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetCustomerProfilesIntegrationConfig"></a>

```typescript
public resetCustomerProfilesIntegrationConfig(): void
```

##### `resetKmsArn` <a name="resetKmsArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetKmsArn"></a>

```typescript
public resetKmsArn(): void
```

##### `resetOutputS3Path` <a name="resetOutputS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path"></a>

```typescript
public resetOutputS3Path(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfig">customerProfilesIntegrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.output">output</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList">EntityresolutionMatchingWorkflowOutputSourceConfigOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalizationInput">applyNormalizationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfigInput">customerProfilesIntegrationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput">kmsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputInput">outputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput">outputS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalization">applyNormalization</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArn">kmsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3Path">outputS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerProfilesIntegrationConfig`<sup>Required</sup> <a name="customerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfig"></a>

```typescript
public readonly customerProfilesIntegrationConfig: EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.output"></a>

```typescript
public readonly output: EntityresolutionMatchingWorkflowOutputSourceConfigOutputList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList">EntityresolutionMatchingWorkflowOutputSourceConfigOutputList</a>

---

##### `applyNormalizationInput`<sup>Optional</sup> <a name="applyNormalizationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalizationInput"></a>

```typescript
public readonly applyNormalizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customerProfilesIntegrationConfigInput`<sup>Optional</sup> <a name="customerProfilesIntegrationConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfigInput"></a>

```typescript
public readonly customerProfilesIntegrationConfigInput: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

---

##### `kmsArnInput`<sup>Optional</sup> <a name="kmsArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput"></a>

```typescript
public readonly kmsArnInput: string;
```

- *Type:* string

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputInput"></a>

```typescript
public readonly outputInput: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfigOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>[]

---

##### `outputS3PathInput`<sup>Optional</sup> <a name="outputS3PathInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput"></a>

```typescript
public readonly outputS3PathInput: string;
```

- *Type:* string

---

##### `applyNormalization`<sup>Required</sup> <a name="applyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalization"></a>

```typescript
public readonly applyNormalization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsArn`<sup>Required</sup> <a name="kmsArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArn"></a>

```typescript
public readonly kmsArn: string;
```

- *Type:* string

---

##### `outputS3Path`<sup>Required</sup> <a name="outputS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3Path"></a>

```typescript
public readonly outputS3Path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowOutputSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putProviderProperties">putProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleBasedProperties">putRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleConditionProperties">putRuleConditionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetEnableRealTimeMatching">resetEnableRealTimeMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetProviderProperties">resetProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetResolutionType">resetResolutionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleBasedProperties">resetRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleConditionProperties">resetRuleConditionProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderProperties` <a name="putProviderProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putProviderProperties"></a>

```typescript
public putProviderProperties(value: EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putProviderProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

---

##### `putRuleBasedProperties` <a name="putRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleBasedProperties"></a>

```typescript
public putRuleBasedProperties(value: EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleBasedProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

---

##### `putRuleConditionProperties` <a name="putRuleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleConditionProperties"></a>

```typescript
public putRuleConditionProperties(value: EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleConditionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

---

##### `resetEnableRealTimeMatching` <a name="resetEnableRealTimeMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetEnableRealTimeMatching"></a>

```typescript
public resetEnableRealTimeMatching(): void
```

##### `resetProviderProperties` <a name="resetProviderProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetProviderProperties"></a>

```typescript
public resetProviderProperties(): void
```

##### `resetResolutionType` <a name="resetResolutionType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetResolutionType"></a>

```typescript
public resetResolutionType(): void
```

##### `resetRuleBasedProperties` <a name="resetRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleBasedProperties"></a>

```typescript
public resetRuleBasedProperties(): void
```

##### `resetRuleConditionProperties` <a name="resetRuleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleConditionProperties"></a>

```typescript
public resetRuleConditionProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerProperties">providerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedProperties">ruleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionProperties">ruleConditionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatchingInput">enableRealTimeMatchingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerPropertiesInput">providerPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionTypeInput">resolutionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedPropertiesInput">ruleBasedPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionPropertiesInput">ruleConditionPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatching">enableRealTimeMatching</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionType">resolutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerProperties`<sup>Required</sup> <a name="providerProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerProperties"></a>

```typescript
public readonly providerProperties: EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference</a>

---

##### `ruleBasedProperties`<sup>Required</sup> <a name="ruleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedProperties"></a>

```typescript
public readonly ruleBasedProperties: EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference</a>

---

##### `ruleConditionProperties`<sup>Required</sup> <a name="ruleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionProperties"></a>

```typescript
public readonly ruleConditionProperties: EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference</a>

---

##### `enableRealTimeMatchingInput`<sup>Optional</sup> <a name="enableRealTimeMatchingInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatchingInput"></a>

```typescript
public readonly enableRealTimeMatchingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `providerPropertiesInput`<sup>Optional</sup> <a name="providerPropertiesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerPropertiesInput"></a>

```typescript
public readonly providerPropertiesInput: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

---

##### `resolutionTypeInput`<sup>Optional</sup> <a name="resolutionTypeInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionTypeInput"></a>

```typescript
public readonly resolutionTypeInput: string;
```

- *Type:* string

---

##### `ruleBasedPropertiesInput`<sup>Optional</sup> <a name="ruleBasedPropertiesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedPropertiesInput"></a>

```typescript
public readonly ruleBasedPropertiesInput: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

---

##### `ruleConditionPropertiesInput`<sup>Optional</sup> <a name="ruleConditionPropertiesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionPropertiesInput"></a>

```typescript
public readonly ruleConditionPropertiesInput: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

---

##### `enableRealTimeMatching`<sup>Required</sup> <a name="enableRealTimeMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatching"></a>

```typescript
public readonly enableRealTimeMatching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resolutionType`<sup>Required</sup> <a name="resolutionType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionType"></a>

```typescript
public readonly resolutionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniques;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path">resetIntermediateS3Path</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntermediateS3Path` <a name="resetIntermediateS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path"></a>

```typescript
public resetIntermediateS3Path(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput">intermediateS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path">intermediateS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intermediateS3PathInput`<sup>Optional</sup> <a name="intermediateS3PathInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput"></a>

```typescript
public readonly intermediateS3PathInput: string;
```

- *Type:* string

---

##### `intermediateS3Path`<sup>Required</sup> <a name="intermediateS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path"></a>

```typescript
public readonly intermediateS3Path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration">putIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration">resetIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderConfiguration">resetProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderServiceArn">resetProviderServiceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntermediateSourceConfiguration` <a name="putIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration"></a>

```typescript
public putIntermediateSourceConfiguration(value: EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---

##### `resetIntermediateSourceConfiguration` <a name="resetIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration"></a>

```typescript
public resetIntermediateSourceConfiguration(): void
```

##### `resetProviderConfiguration` <a name="resetProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderConfiguration"></a>

```typescript
public resetProviderConfiguration(): void
```

##### `resetProviderServiceArn` <a name="resetProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderServiceArn"></a>

```typescript
public resetProviderServiceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration">intermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput">intermediateSourceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput">providerConfigurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput">providerServiceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfiguration">providerConfiguration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArn">providerServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intermediateSourceConfiguration`<sup>Required</sup> <a name="intermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration"></a>

```typescript
public readonly intermediateSourceConfiguration: EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a>

---

##### `intermediateSourceConfigurationInput`<sup>Optional</sup> <a name="intermediateSourceConfigurationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput"></a>

```typescript
public readonly intermediateSourceConfigurationInput: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---

##### `providerConfigurationInput`<sup>Optional</sup> <a name="providerConfigurationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput"></a>

```typescript
public readonly providerConfigurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `providerServiceArnInput`<sup>Optional</sup> <a name="providerServiceArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput"></a>

```typescript
public readonly providerServiceArnInput: string;
```

- *Type:* string

---

##### `providerConfiguration`<sup>Required</sup> <a name="providerConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```typescript
public readonly providerConfiguration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `providerServiceArn`<sup>Required</sup> <a name="providerServiceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```typescript
public readonly providerServiceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel">resetAttributeMatchingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetMatchPurpose">resetMatchPurpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>[]

---

##### `resetAttributeMatchingModel` <a name="resetAttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel"></a>

```typescript
public resetAttributeMatchingModel(): void
```

##### `resetMatchPurpose` <a name="resetMatchPurpose" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetMatchPurpose"></a>

```typescript
public resetMatchPurpose(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput">attributeMatchingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurposeInput">matchPurposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">attributeMatchingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurpose">matchPurpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rules"></a>

```typescript
public readonly rules: EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList</a>

---

##### `attributeMatchingModelInput`<sup>Optional</sup> <a name="attributeMatchingModelInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput"></a>

```typescript
public readonly attributeMatchingModelInput: string;
```

- *Type:* string

---

##### `matchPurposeInput`<sup>Optional</sup> <a name="matchPurposeInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurposeInput"></a>

```typescript
public readonly matchPurposeInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>[]

---

##### `attributeMatchingModel`<sup>Required</sup> <a name="attributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```typescript
public readonly attributeMatchingModel: string;
```

- *Type:* string

---

##### `matchPurpose`<sup>Required</sup> <a name="matchPurpose" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurpose"></a>

```typescript
public readonly matchPurpose: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get"></a>

```typescript
public get(index: number): EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>[]

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys">resetMatchingKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchingKeys` <a name="resetMatchingKeys" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys"></a>

```typescript
public resetMatchingKeys(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput">matchingKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">matchingKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingKeysInput`<sup>Optional</sup> <a name="matchingKeysInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput"></a>

```typescript
public readonly matchingKeysInput: string[];
```

- *Type:* string[]

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `matchingKeys`<sup>Required</sup> <a name="matchingKeys" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```typescript
public readonly matchingKeys: string[];
```

- *Type:* string[]

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resetEnableTransitiveMatching">resetEnableTransitiveMatching</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableTransitiveMatching` <a name="resetEnableTransitiveMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resetEnableTransitiveMatching"></a>

```typescript
public resetEnableTransitiveMatching(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatchingInput">enableTransitiveMatchingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatching">enableTransitiveMatching</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableTransitiveMatchingInput`<sup>Optional</sup> <a name="enableTransitiveMatchingInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatchingInput"></a>

```typescript
public readonly enableTransitiveMatchingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableTransitiveMatching`<sup>Required</sup> <a name="enableTransitiveMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatching"></a>

```typescript
public readonly enableTransitiveMatching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putMatchingConfig">putMatchingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetMatchingConfig">resetMatchingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchingConfig` <a name="putMatchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putMatchingConfig"></a>

```typescript
public putMatchingConfig(value: EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putMatchingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

---

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>[]

---

##### `resetMatchingConfig` <a name="resetMatchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetMatchingConfig"></a>

```typescript
public resetMatchingConfig(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfig">matchingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfigInput">matchingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingConfig`<sup>Required</sup> <a name="matchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfig"></a>

```typescript
public readonly matchingConfig: EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rules"></a>

```typescript
public readonly rules: EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList</a>

---

##### `matchingConfigInput`<sup>Optional</sup> <a name="matchingConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfigInput"></a>

```typescript
public readonly matchingConfigInput: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get"></a>

```typescript
public get(index: number): EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>[]

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>

---


### EntityresolutionMatchingWorkflowTagsList <a name="EntityresolutionMatchingWorkflowTagsList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.get"></a>

```typescript
public get(index: number): EntityresolutionMatchingWorkflowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>[]

---


### EntityresolutionMatchingWorkflowTagsOutputReference <a name="EntityresolutionMatchingWorkflowTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer"></a>

```typescript
import { entityresolutionMatchingWorkflow } from '@cdktn/provider-awscc'

new entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionMatchingWorkflowTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>

---



