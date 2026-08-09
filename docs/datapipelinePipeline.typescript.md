# `datapipelinePipeline` Submodule <a name="`datapipelinePipeline` Submodule" id="@cdktn/provider-awscc.datapipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatapipelinePipeline <a name="DatapipelinePipeline" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline awscc_datapipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipeline(scope: Construct, id: string, config: DatapipelinePipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig">DatapipelinePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig">DatapipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects">putParameterObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues">putParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects">putPipelineObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags">putPipelineTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetActivate">resetActivate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterObjects">resetParameterObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterValues">resetParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineObjects">resetPipelineObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineTags">resetPipelineTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameterObjects` <a name="putParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects"></a>

```typescript
public putParameterObjects(value: IResolvable | DatapipelinePipelineParameterObjects[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]

---

##### `putParameterValues` <a name="putParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues"></a>

```typescript
public putParameterValues(value: IResolvable | DatapipelinePipelineParameterValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]

---

##### `putPipelineObjects` <a name="putPipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects"></a>

```typescript
public putPipelineObjects(value: IResolvable | DatapipelinePipelinePipelineObjects[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]

---

##### `putPipelineTags` <a name="putPipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags"></a>

```typescript
public putPipelineTags(value: IResolvable | DatapipelinePipelinePipelineTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]

---

##### `resetActivate` <a name="resetActivate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetActivate"></a>

```typescript
public resetActivate(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetParameterObjects` <a name="resetParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterObjects"></a>

```typescript
public resetParameterObjects(): void
```

##### `resetParameterValues` <a name="resetParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterValues"></a>

```typescript
public resetParameterValues(): void
```

##### `resetPipelineObjects` <a name="resetPipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineObjects"></a>

```typescript
public resetPipelineObjects(): void
```

##### `resetPipelineTags` <a name="resetPipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineTags"></a>

```typescript
public resetPipelineTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatapipelinePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

datapipelinePipeline.DatapipelinePipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

datapipelinePipeline.DatapipelinePipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

datapipelinePipeline.DatapipelinePipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

datapipelinePipeline.DatapipelinePipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatapipelinePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatapipelinePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatapipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatapipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjects">parameterObjects</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList">DatapipelinePipelineParameterObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValues">parameterValues</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList">DatapipelinePipelineParameterValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjects">pipelineObjects</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList">DatapipelinePipelinePipelineObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTags">pipelineTags</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList">DatapipelinePipelinePipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activateInput">activateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjectsInput">parameterObjectsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValuesInput">parameterValuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjectsInput">pipelineObjectsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTagsInput">pipelineTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activate">activate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameterObjects`<sup>Required</sup> <a name="parameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjects"></a>

```typescript
public readonly parameterObjects: DatapipelinePipelineParameterObjectsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList">DatapipelinePipelineParameterObjectsList</a>

---

##### `parameterValues`<sup>Required</sup> <a name="parameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValues"></a>

```typescript
public readonly parameterValues: DatapipelinePipelineParameterValuesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList">DatapipelinePipelineParameterValuesList</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `pipelineObjects`<sup>Required</sup> <a name="pipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjects"></a>

```typescript
public readonly pipelineObjects: DatapipelinePipelinePipelineObjectsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList">DatapipelinePipelinePipelineObjectsList</a>

---

##### `pipelineTags`<sup>Required</sup> <a name="pipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTags"></a>

```typescript
public readonly pipelineTags: DatapipelinePipelinePipelineTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList">DatapipelinePipelinePipelineTagsList</a>

---

##### `activateInput`<sup>Optional</sup> <a name="activateInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activateInput"></a>

```typescript
public readonly activateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterObjectsInput`<sup>Optional</sup> <a name="parameterObjectsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjectsInput"></a>

```typescript
public readonly parameterObjectsInput: IResolvable | DatapipelinePipelineParameterObjects[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]

---

##### `parameterValuesInput`<sup>Optional</sup> <a name="parameterValuesInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValuesInput"></a>

```typescript
public readonly parameterValuesInput: IResolvable | DatapipelinePipelineParameterValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]

---

##### `pipelineObjectsInput`<sup>Optional</sup> <a name="pipelineObjectsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjectsInput"></a>

```typescript
public readonly pipelineObjectsInput: IResolvable | DatapipelinePipelinePipelineObjects[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]

---

##### `pipelineTagsInput`<sup>Optional</sup> <a name="pipelineTagsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTagsInput"></a>

```typescript
public readonly pipelineTagsInput: IResolvable | DatapipelinePipelinePipelineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]

---

##### `activate`<sup>Required</sup> <a name="activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activate"></a>

```typescript
public readonly activate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatapipelinePipelineConfig <a name="DatapipelinePipelineConfig" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

const datapipelinePipelineConfig: datapipelinePipeline.DatapipelinePipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.name">name</a></code> | <code>string</code> | The name of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.activate">activate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to validate and start the pipeline or stop an active pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.description">description</a></code> | <code>string</code> | A description of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterObjects">parameterObjects</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]</code> | The parameter objects used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterValues">parameterValues</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]</code> | The parameter values used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineObjects">pipelineObjects</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]</code> | The objects that define the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineTags">pipelineTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]</code> | A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

##### `activate`<sup>Optional</sup> <a name="activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.activate"></a>

```typescript
public readonly activate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to validate and start the pipeline or stop an active pipeline.

By default, the value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#activate DatapipelinePipeline#activate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#description DatapipelinePipeline#description}

---

##### `parameterObjects`<sup>Optional</sup> <a name="parameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterObjects"></a>

```typescript
public readonly parameterObjects: IResolvable | DatapipelinePipelineParameterObjects[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]

The parameter objects used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#parameter_objects DatapipelinePipeline#parameter_objects}

---

##### `parameterValues`<sup>Optional</sup> <a name="parameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterValues"></a>

```typescript
public readonly parameterValues: IResolvable | DatapipelinePipelineParameterValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]

The parameter values used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#parameter_values DatapipelinePipeline#parameter_values}

---

##### `pipelineObjects`<sup>Optional</sup> <a name="pipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineObjects"></a>

```typescript
public readonly pipelineObjects: IResolvable | DatapipelinePipelinePipelineObjects[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]

The objects that define the pipeline.

These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#pipeline_objects DatapipelinePipeline#pipeline_objects}

---

##### `pipelineTags`<sup>Optional</sup> <a name="pipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineTags"></a>

```typescript
public readonly pipelineTags: IResolvable | DatapipelinePipelinePipelineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]

A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions.

For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#pipeline_tags DatapipelinePipeline#pipeline_tags}

---

### DatapipelinePipelineParameterObjects <a name="DatapipelinePipelineParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

const datapipelinePipelineParameterObjects: datapipelinePipeline.DatapipelinePipelineParameterObjects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.attributes">attributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]</code> | The attributes of the parameter object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.id">id</a></code> | <code>string</code> | The ID of the parameter object. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | DatapipelinePipelineParameterObjectsAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]

The attributes of the parameter object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#attributes DatapipelinePipeline#attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the parameter object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DatapipelinePipelineParameterObjectsAttributes <a name="DatapipelinePipelineParameterObjectsAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

const datapipelinePipelineParameterObjectsAttributes: datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.key">key</a></code> | <code>string</code> | The field identifier. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.stringValue">stringValue</a></code> | <code>string</code> | The field value, expressed as a String. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The field identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

The field value, expressed as a String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelineParameterValues <a name="DatapipelinePipelineParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

const datapipelinePipelineParameterValues: datapipelinePipeline.DatapipelinePipelineParameterValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.id">id</a></code> | <code>string</code> | The ID of the parameter value. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.stringValue">stringValue</a></code> | <code>string</code> | The field value, expressed as a String. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

The field value, expressed as a String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelinePipelineObjects <a name="DatapipelinePipelinePipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

const datapipelinePipelinePipelineObjects: datapipelinePipeline.DatapipelinePipelinePipelineObjects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]</code> | Key-value pairs that define the properties of the object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.id">id</a></code> | <code>string</code> | The ID of the object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.name">name</a></code> | <code>string</code> | The name of the object. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.fields"></a>

```typescript
public readonly fields: IResolvable | DatapipelinePipelinePipelineObjectsFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]

Key-value pairs that define the properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#fields DatapipelinePipeline#fields}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

### DatapipelinePipelinePipelineObjectsFields <a name="DatapipelinePipelinePipelineObjectsFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

const datapipelinePipelinePipelineObjectsFields: datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.key">key</a></code> | <code>string</code> | Specifies the name of a field for a particular object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.refValue">refValue</a></code> | <code>string</code> | A field value that you specify as an identifier of another object in the same pipeline definition. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.stringValue">stringValue</a></code> | <code>string</code> | A field value that you specify as a string. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Specifies the name of a field for a particular object.

To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `refValue`<sup>Optional</sup> <a name="refValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.refValue"></a>

```typescript
public readonly refValue: string;
```

- *Type:* string

A field value that you specify as an identifier of another object in the same pipeline definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#ref_value DatapipelinePipeline#ref_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

A field value that you specify as a string.

To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelinePipelineTags <a name="DatapipelinePipelinePipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

const datapipelinePipelinePipelineTags: datapipelinePipeline.DatapipelinePipelinePipelineTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.key">key</a></code> | <code>string</code> | The key name of a tag. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.value">value</a></code> | <code>string</code> | The value to associate with the key name. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value to associate with the key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#value DatapipelinePipeline#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatapipelinePipelineParameterObjectsAttributesList <a name="DatapipelinePipelineParameterObjectsAttributesList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get"></a>

```typescript
public get(index: number): DatapipelinePipelineParameterObjectsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelineParameterObjectsAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]

---


### DatapipelinePipelineParameterObjectsAttributesOutputReference <a name="DatapipelinePipelineParameterObjectsAttributesOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelineParameterObjectsAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>

---


### DatapipelinePipelineParameterObjectsList <a name="DatapipelinePipelineParameterObjectsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelineParameterObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get"></a>

```typescript
public get(index: number): DatapipelinePipelineParameterObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelineParameterObjects[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]

---


### DatapipelinePipelineParameterObjectsOutputReference <a name="DatapipelinePipelineParameterObjectsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | DatapipelinePipelineParameterObjectsAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList">DatapipelinePipelineParameterObjectsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: DatapipelinePipelineParameterObjectsAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList">DatapipelinePipelineParameterObjectsAttributesList</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | DatapipelinePipelineParameterObjectsAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelineParameterObjects;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>

---


### DatapipelinePipelineParameterValuesList <a name="DatapipelinePipelineParameterValuesList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelineParameterValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get"></a>

```typescript
public get(index: number): DatapipelinePipelineParameterValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelineParameterValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]

---


### DatapipelinePipelineParameterValuesOutputReference <a name="DatapipelinePipelineParameterValuesOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelineParameterValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>

---


### DatapipelinePipelinePipelineObjectsFieldsList <a name="DatapipelinePipelinePipelineObjectsFieldsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get"></a>

```typescript
public get(index: number): DatapipelinePipelinePipelineObjectsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelinePipelineObjectsFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]

---


### DatapipelinePipelinePipelineObjectsFieldsOutputReference <a name="DatapipelinePipelinePipelineObjectsFieldsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetRefValue">resetRefValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetRefValue` <a name="resetRefValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetRefValue"></a>

```typescript
public resetRefValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValueInput">refValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue">refValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `refValueInput`<sup>Optional</sup> <a name="refValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValueInput"></a>

```typescript
public readonly refValueInput: string;
```

- *Type:* string

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `refValue`<sup>Required</sup> <a name="refValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue"></a>

```typescript
public readonly refValue: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelinePipelineObjectsFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>

---


### DatapipelinePipelinePipelineObjectsList <a name="DatapipelinePipelinePipelineObjectsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelinePipelineObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get"></a>

```typescript
public get(index: number): DatapipelinePipelinePipelineObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelinePipelineObjects[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]

---


### DatapipelinePipelinePipelineObjectsOutputReference <a name="DatapipelinePipelinePipelineObjectsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | DatapipelinePipelinePipelineObjectsFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList">DatapipelinePipelinePipelineObjectsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fields"></a>

```typescript
public readonly fields: DatapipelinePipelinePipelineObjectsFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList">DatapipelinePipelinePipelineObjectsFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | DatapipelinePipelinePipelineObjectsFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelinePipelineObjects;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>

---


### DatapipelinePipelinePipelineTagsList <a name="DatapipelinePipelinePipelineTagsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelinePipelineTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get"></a>

```typescript
public get(index: number): DatapipelinePipelinePipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelinePipelineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]

---


### DatapipelinePipelinePipelineTagsOutputReference <a name="DatapipelinePipelinePipelineTagsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer"></a>

```typescript
import { datapipelinePipeline } from '@cdktn/provider-awscc'

new datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelinePipelineTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>

---



