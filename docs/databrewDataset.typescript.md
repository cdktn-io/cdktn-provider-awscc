# `databrewDataset` Submodule <a name="`databrewDataset` Submodule" id="@cdktn/provider-awscc.databrewDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabrewDataset <a name="DatabrewDataset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset awscc_databrew_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDataset(scope: Construct, id: string, config: DatabrewDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig">DatabrewDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig">DatabrewDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions">putFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions">putPathOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetPathOptions">resetPathOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFormatOptions` <a name="putFormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions"></a>

```typescript
public putFormatOptions(value: DatabrewDatasetFormatOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

---

##### `putInput` <a name="putInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput"></a>

```typescript
public putInput(value: DatabrewDatasetInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

---

##### `putPathOptions` <a name="putPathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions"></a>

```typescript
public putPathOptions(value: DatabrewDatasetPathOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags"></a>

```typescript
public putTags(value: IResolvable | DatabrewDatasetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]

---

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormatOptions"></a>

```typescript
public resetFormatOptions(): void
```

##### `resetPathOptions` <a name="resetPathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetPathOptions"></a>

```typescript
public resetPathOptions(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatabrewDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

databrewDataset.DatabrewDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

databrewDataset.DatabrewDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

databrewDataset.DatabrewDataset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

databrewDataset.DatabrewDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatabrewDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabrewDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabrewDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatabrewDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference">DatabrewDatasetFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference">DatabrewDatasetInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptions">pathOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference">DatabrewDatasetPathOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList">DatabrewDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptionsInput">formatOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.inputInput">inputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptionsInput">pathOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptions"></a>

```typescript
public readonly formatOptions: DatabrewDatasetFormatOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference">DatabrewDatasetFormatOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.input"></a>

```typescript
public readonly input: DatabrewDatasetInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference">DatabrewDatasetInputOutputReference</a>

---

##### `pathOptions`<sup>Required</sup> <a name="pathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptions"></a>

```typescript
public readonly pathOptions: DatabrewDatasetPathOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference">DatabrewDatasetPathOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tags"></a>

```typescript
public readonly tags: DatabrewDatasetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList">DatabrewDatasetTagsList</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptionsInput"></a>

```typescript
public readonly formatOptionsInput: IResolvable | DatabrewDatasetFormatOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | DatabrewDatasetInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathOptionsInput`<sup>Optional</sup> <a name="pathOptionsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptionsInput"></a>

```typescript
public readonly pathOptionsInput: IResolvable | DatabrewDatasetPathOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DatabrewDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabrewDatasetConfig <a name="DatabrewDatasetConfig" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetConfig: databrewDataset.DatabrewDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | Input. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.name">name</a></code> | <code>string</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.format">format</a></code> | <code>string</code> | Dataset format. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | Format options for dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.pathOptions">pathOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | PathOptions. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.source">source</a></code> | <code>string</code> | Source type of the dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.input"></a>

```typescript
public readonly input: DatabrewDatasetInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#input DatabrewDataset#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#name DatabrewDataset#name}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Dataset format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#format DatabrewDataset#format}

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.formatOptions"></a>

```typescript
public readonly formatOptions: DatabrewDatasetFormatOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

Format options for dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#format_options DatabrewDataset#format_options}

---

##### `pathOptions`<sup>Optional</sup> <a name="pathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.pathOptions"></a>

```typescript
public readonly pathOptions: DatabrewDatasetPathOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

PathOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#path_options DatabrewDataset#path_options}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Source type of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#source DatabrewDataset#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DatabrewDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}.

---

### DatabrewDatasetFormatOptions <a name="DatabrewDatasetFormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetFormatOptions: databrewDataset.DatabrewDatasetFormatOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | Csv options. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.excel">excel</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#excel DatabrewDataset#excel}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | Json options. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.csv"></a>

```typescript
public readonly csv: DatabrewDatasetFormatOptionsCsv;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

Csv options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#csv DatabrewDataset#csv}

---

##### `excel`<sup>Optional</sup> <a name="excel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.excel"></a>

```typescript
public readonly excel: DatabrewDatasetFormatOptionsExcel;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#excel DatabrewDataset#excel}.

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.json"></a>

```typescript
public readonly json: DatabrewDatasetFormatOptionsJson;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

Json options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#json DatabrewDataset#json}

---

### DatabrewDatasetFormatOptionsCsv <a name="DatabrewDatasetFormatOptionsCsv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetFormatOptionsCsv: databrewDataset.DatabrewDatasetFormatOptionsCsv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.delimiter">delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#delimiter DatabrewDataset#delimiter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.headerRow">headerRow</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#delimiter DatabrewDataset#delimiter}.

---

##### `headerRow`<sup>Optional</sup> <a name="headerRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.headerRow"></a>

```typescript
public readonly headerRow: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}.

---

### DatabrewDatasetFormatOptionsExcel <a name="DatabrewDatasetFormatOptionsExcel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetFormatOptionsExcel: databrewDataset.DatabrewDatasetFormatOptionsExcel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.headerRow">headerRow</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetIndexes">sheetIndexes</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#sheet_indexes DatabrewDataset#sheet_indexes}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetNames">sheetNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#sheet_names DatabrewDataset#sheet_names}. |

---

##### `headerRow`<sup>Optional</sup> <a name="headerRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.headerRow"></a>

```typescript
public readonly headerRow: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}.

---

##### `sheetIndexes`<sup>Optional</sup> <a name="sheetIndexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetIndexes"></a>

```typescript
public readonly sheetIndexes: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#sheet_indexes DatabrewDataset#sheet_indexes}.

---

##### `sheetNames`<sup>Optional</sup> <a name="sheetNames" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetNames"></a>

```typescript
public readonly sheetNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#sheet_names DatabrewDataset#sheet_names}.

---

### DatabrewDatasetFormatOptionsJson <a name="DatabrewDatasetFormatOptionsJson" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetFormatOptionsJson: databrewDataset.DatabrewDatasetFormatOptionsJson = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.property.multiLine">multiLine</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#multi_line DatabrewDataset#multi_line}. |

---

##### `multiLine`<sup>Optional</sup> <a name="multiLine" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.property.multiLine"></a>

```typescript
public readonly multiLine: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#multi_line DatabrewDataset#multi_line}.

---

### DatabrewDatasetInput <a name="DatabrewDatasetInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetInput: databrewDataset.DatabrewDatasetInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.databaseInputDefinition">databaseInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#database_input_definition DatabrewDataset#database_input_definition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.dataCatalogInputDefinition">dataCatalogInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#data_catalog_input_definition DatabrewDataset#data_catalog_input_definition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#metadata DatabrewDataset#metadata}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.s3InputDefinition">s3InputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | Input location. |

---

##### `databaseInputDefinition`<sup>Optional</sup> <a name="databaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.databaseInputDefinition"></a>

```typescript
public readonly databaseInputDefinition: DatabrewDatasetInputDatabaseInputDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#database_input_definition DatabrewDataset#database_input_definition}.

---

##### `dataCatalogInputDefinition`<sup>Optional</sup> <a name="dataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.dataCatalogInputDefinition"></a>

```typescript
public readonly dataCatalogInputDefinition: DatabrewDatasetInputDataCatalogInputDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#data_catalog_input_definition DatabrewDataset#data_catalog_input_definition}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.metadata"></a>

```typescript
public readonly metadata: DatabrewDatasetInputMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#metadata DatabrewDataset#metadata}.

---

##### `s3InputDefinition`<sup>Optional</sup> <a name="s3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.s3InputDefinition"></a>

```typescript
public readonly s3InputDefinition: DatabrewDatasetInputS3InputDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#s3_input_definition DatabrewDataset#s3_input_definition}

---

### DatabrewDatasetInputDatabaseInputDefinition <a name="DatabrewDatasetInputDatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetInputDatabaseInputDefinition: databrewDataset.DatabrewDatasetInputDatabaseInputDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.databaseTableName">databaseTableName</a></code> | <code>string</code> | Database table name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | Glue connection name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.queryString">queryString</a></code> | <code>string</code> | Custom SQL to run against the provided AWS Glue connection. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | Input location. |

---

##### `databaseTableName`<sup>Optional</sup> <a name="databaseTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.databaseTableName"></a>

```typescript
public readonly databaseTableName: string;
```

- *Type:* string

Database table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#database_table_name DatabrewDataset#database_table_name}

---

##### `glueConnectionName`<sup>Optional</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

Glue connection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#glue_connection_name DatabrewDataset#glue_connection_name}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

Custom SQL to run against the provided AWS Glue connection.

This SQL will be used as the input for DataBrew projects and jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#query_string DatabrewDataset#query_string}

---

##### `tempDirectory`<sup>Optional</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.tempDirectory"></a>

```typescript
public readonly tempDirectory: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}

---

### DatabrewDatasetInputDatabaseInputDefinitionTempDirectory <a name="DatabrewDatasetInputDatabaseInputDefinitionTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetInputDatabaseInputDefinitionTempDirectory: databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetInputDataCatalogInputDefinition <a name="DatabrewDatasetInputDataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetInputDataCatalogInputDefinition: databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.catalogId">catalogId</a></code> | <code>string</code> | Catalog id. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.databaseName">databaseName</a></code> | <code>string</code> | Database name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tableName">tableName</a></code> | <code>string</code> | Table name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | Input location. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Catalog id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#catalog_id DatabrewDataset#catalog_id}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#database_name DatabrewDataset#database_name}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#table_name DatabrewDataset#table_name}

---

##### `tempDirectory`<sup>Optional</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tempDirectory"></a>

```typescript
public readonly tempDirectory: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}

---

### DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory <a name="DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetInputDataCatalogInputDefinitionTempDirectory: databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetInputMetadata <a name="DatabrewDatasetInputMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetInputMetadata: databrewDataset.DatabrewDatasetInputMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.property.sourceArn">sourceArn</a></code> | <code>string</code> | Arn of the source of the dataset. For e.g.: AppFlow Flow ARN. |

---

##### `sourceArn`<sup>Optional</sup> <a name="sourceArn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

Arn of the source of the dataset. For e.g.: AppFlow Flow ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#source_arn DatabrewDataset#source_arn}

---

### DatabrewDatasetInputS3InputDefinition <a name="DatabrewDatasetInputS3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetInputS3InputDefinition: databrewDataset.DatabrewDatasetInputS3InputDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetPathOptions <a name="DatabrewDatasetPathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetPathOptions: databrewDataset.DatabrewDatasetPathOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.filesLimit">filesLimit</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#files_limit DatabrewDataset#files_limit}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.lastModifiedDateCondition">lastModifiedDateCondition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#last_modified_date_condition DatabrewDataset#last_modified_date_condition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#parameters DatabrewDataset#parameters}. |

---

##### `filesLimit`<sup>Optional</sup> <a name="filesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.filesLimit"></a>

```typescript
public readonly filesLimit: DatabrewDatasetPathOptionsFilesLimit;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#files_limit DatabrewDataset#files_limit}.

---

##### `lastModifiedDateCondition`<sup>Optional</sup> <a name="lastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.lastModifiedDateCondition"></a>

```typescript
public readonly lastModifiedDateCondition: DatabrewDatasetPathOptionsLastModifiedDateCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#last_modified_date_condition DatabrewDataset#last_modified_date_condition}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | DatabrewDatasetPathOptionsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#parameters DatabrewDataset#parameters}.

---

### DatabrewDatasetPathOptionsFilesLimit <a name="DatabrewDatasetPathOptionsFilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetPathOptionsFilesLimit: databrewDataset.DatabrewDatasetPathOptionsFilesLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.maxFiles">maxFiles</a></code> | <code>number</code> | Maximum number of files. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.order">order</a></code> | <code>string</code> | Order. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.orderedBy">orderedBy</a></code> | <code>string</code> | Ordered by. |

---

##### `maxFiles`<sup>Optional</sup> <a name="maxFiles" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.maxFiles"></a>

```typescript
public readonly maxFiles: number;
```

- *Type:* number

Maximum number of files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#max_files DatabrewDataset#max_files}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#order DatabrewDataset#order}

---

##### `orderedBy`<sup>Optional</sup> <a name="orderedBy" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.orderedBy"></a>

```typescript
public readonly orderedBy: string;
```

- *Type:* string

Ordered by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#ordered_by DatabrewDataset#ordered_by}

---

### DatabrewDatasetPathOptionsLastModifiedDateCondition <a name="DatabrewDatasetPathOptionsLastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetPathOptionsLastModifiedDateCondition: databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.expression">expression</a></code> | <code>string</code> | Filtering expression for a parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.valuesMap">valuesMap</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Filtering expression for a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}

---

##### `valuesMap`<sup>Optional</sup> <a name="valuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.valuesMap"></a>

```typescript
public readonly valuesMap: IResolvable | DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}.

---

### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetPathOptionsLastModifiedDateConditionValuesMap: databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.valueReference">valueReference</a></code> | <code>string</code> | Variable name. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

##### `valueReference`<sup>Optional</sup> <a name="valueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.valueReference"></a>

```typescript
public readonly valueReference: string;
```

- *Type:* string

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value_reference DatabrewDataset#value_reference}

---

### DatabrewDatasetPathOptionsParameters <a name="DatabrewDatasetPathOptionsParameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetPathOptionsParameters: databrewDataset.DatabrewDatasetPathOptionsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.datasetParameter">datasetParameter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#dataset_parameter DatabrewDataset#dataset_parameter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.pathParameterName">pathParameterName</a></code> | <code>string</code> | Parameter name. |

---

##### `datasetParameter`<sup>Optional</sup> <a name="datasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.datasetParameter"></a>

```typescript
public readonly datasetParameter: DatabrewDatasetPathOptionsParametersDatasetParameter;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#dataset_parameter DatabrewDataset#dataset_parameter}.

---

##### `pathParameterName`<sup>Optional</sup> <a name="pathParameterName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.pathParameterName"></a>

```typescript
public readonly pathParameterName: string;
```

- *Type:* string

Parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#path_parameter_name DatabrewDataset#path_parameter_name}

---

### DatabrewDatasetPathOptionsParametersDatasetParameter <a name="DatabrewDatasetPathOptionsParametersDatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetPathOptionsParametersDatasetParameter: databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.createColumn">createColumn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Add the value of this parameter as a column in a dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.datetimeOptions">datetimeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#datetime_options DatabrewDataset#datetime_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#filter DatabrewDataset#filter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.name">name</a></code> | <code>string</code> | Parameter name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.type">type</a></code> | <code>string</code> | Parameter type. |

---

##### `createColumn`<sup>Optional</sup> <a name="createColumn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.createColumn"></a>

```typescript
public readonly createColumn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Add the value of this parameter as a column in a dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#create_column DatabrewDataset#create_column}

---

##### `datetimeOptions`<sup>Optional</sup> <a name="datetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.datetimeOptions"></a>

```typescript
public readonly datetimeOptions: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#datetime_options DatabrewDataset#datetime_options}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.filter"></a>

```typescript
public readonly filter: DatabrewDatasetPathOptionsParametersDatasetParameterFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#filter DatabrewDataset#filter}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#name DatabrewDataset#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Parameter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#type DatabrewDataset#type}

---

### DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions <a name="DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions: databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.format">format</a></code> | <code>string</code> | Date/time format of a date parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.localeCode">localeCode</a></code> | <code>string</code> | Locale code for a date parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.timezoneOffset">timezoneOffset</a></code> | <code>string</code> | Timezone offset. |

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Date/time format of a date parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#format DatabrewDataset#format}

---

##### `localeCode`<sup>Optional</sup> <a name="localeCode" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.localeCode"></a>

```typescript
public readonly localeCode: string;
```

- *Type:* string

Locale code for a date parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#locale_code DatabrewDataset#locale_code}

---

##### `timezoneOffset`<sup>Optional</sup> <a name="timezoneOffset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.timezoneOffset"></a>

```typescript
public readonly timezoneOffset: string;
```

- *Type:* string

Timezone offset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#timezone_offset DatabrewDataset#timezone_offset}

---

### DatabrewDatasetPathOptionsParametersDatasetParameterFilter <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetPathOptionsParametersDatasetParameterFilter: databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.expression">expression</a></code> | <code>string</code> | Filtering expression for a parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.valuesMap">valuesMap</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Filtering expression for a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}

---

##### `valuesMap`<sup>Optional</sup> <a name="valuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.valuesMap"></a>

```typescript
public readonly valuesMap: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}.

---

### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap: databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.valueReference">valueReference</a></code> | <code>string</code> | Variable name. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

##### `valueReference`<sup>Optional</sup> <a name="valueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.valueReference"></a>

```typescript
public readonly valueReference: string;
```

- *Type:* string

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value_reference DatabrewDataset#value_reference}

---

### DatabrewDatasetTags <a name="DatabrewDatasetTags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

const databrewDatasetTags: databrewDataset.DatabrewDatasetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabrewDatasetFormatOptionsCsvOutputReference <a name="DatabrewDatasetFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetHeaderRow">resetHeaderRow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetHeaderRow` <a name="resetHeaderRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetHeaderRow"></a>

```typescript
public resetHeaderRow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRowInput">headerRowInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRow">headerRow</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `headerRowInput`<sup>Optional</sup> <a name="headerRowInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRowInput"></a>

```typescript
public readonly headerRowInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `headerRow`<sup>Required</sup> <a name="headerRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRow"></a>

```typescript
public readonly headerRow: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetFormatOptionsCsv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

---


### DatabrewDatasetFormatOptionsExcelOutputReference <a name="DatabrewDatasetFormatOptionsExcelOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetHeaderRow">resetHeaderRow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetIndexes">resetSheetIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetNames">resetSheetNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderRow` <a name="resetHeaderRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetHeaderRow"></a>

```typescript
public resetHeaderRow(): void
```

##### `resetSheetIndexes` <a name="resetSheetIndexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetIndexes"></a>

```typescript
public resetSheetIndexes(): void
```

##### `resetSheetNames` <a name="resetSheetNames" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetNames"></a>

```typescript
public resetSheetNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRowInput">headerRowInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexesInput">sheetIndexesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNamesInput">sheetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRow">headerRow</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexes">sheetIndexes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNames">sheetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerRowInput`<sup>Optional</sup> <a name="headerRowInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRowInput"></a>

```typescript
public readonly headerRowInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sheetIndexesInput`<sup>Optional</sup> <a name="sheetIndexesInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexesInput"></a>

```typescript
public readonly sheetIndexesInput: number[];
```

- *Type:* number[]

---

##### `sheetNamesInput`<sup>Optional</sup> <a name="sheetNamesInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNamesInput"></a>

```typescript
public readonly sheetNamesInput: string[];
```

- *Type:* string[]

---

##### `headerRow`<sup>Required</sup> <a name="headerRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRow"></a>

```typescript
public readonly headerRow: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sheetIndexes`<sup>Required</sup> <a name="sheetIndexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexes"></a>

```typescript
public readonly sheetIndexes: number[];
```

- *Type:* number[]

---

##### `sheetNames`<sup>Required</sup> <a name="sheetNames" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNames"></a>

```typescript
public readonly sheetNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetFormatOptionsExcel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

---


### DatabrewDatasetFormatOptionsJsonOutputReference <a name="DatabrewDatasetFormatOptionsJsonOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resetMultiLine">resetMultiLine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMultiLine` <a name="resetMultiLine" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resetMultiLine"></a>

```typescript
public resetMultiLine(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLineInput">multiLineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLine">multiLine</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multiLineInput`<sup>Optional</sup> <a name="multiLineInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLineInput"></a>

```typescript
public readonly multiLineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetFormatOptionsJson;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

---


### DatabrewDatasetFormatOptionsOutputReference <a name="DatabrewDatasetFormatOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetFormatOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel">putExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson">putJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetCsv">resetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetExcel">resetExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetJson">resetJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsv` <a name="putCsv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv"></a>

```typescript
public putCsv(value: DatabrewDatasetFormatOptionsCsv): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

---

##### `putExcel` <a name="putExcel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel"></a>

```typescript
public putExcel(value: DatabrewDatasetFormatOptionsExcel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

---

##### `putJson` <a name="putJson" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson"></a>

```typescript
public putJson(value: DatabrewDatasetFormatOptionsJson): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

---

##### `resetCsv` <a name="resetCsv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetCsv"></a>

```typescript
public resetCsv(): void
```

##### `resetExcel` <a name="resetExcel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetExcel"></a>

```typescript
public resetExcel(): void
```

##### `resetJson` <a name="resetJson" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetJson"></a>

```typescript
public resetJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference">DatabrewDatasetFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excel">excel</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference">DatabrewDatasetFormatOptionsExcelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference">DatabrewDatasetFormatOptionsJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csvInput">csvInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excelInput">excelInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.jsonInput">jsonInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csv"></a>

```typescript
public readonly csv: DatabrewDatasetFormatOptionsCsvOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference">DatabrewDatasetFormatOptionsCsvOutputReference</a>

---

##### `excel`<sup>Required</sup> <a name="excel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excel"></a>

```typescript
public readonly excel: DatabrewDatasetFormatOptionsExcelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference">DatabrewDatasetFormatOptionsExcelOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.json"></a>

```typescript
public readonly json: DatabrewDatasetFormatOptionsJsonOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference">DatabrewDatasetFormatOptionsJsonOutputReference</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csvInput"></a>

```typescript
public readonly csvInput: IResolvable | DatabrewDatasetFormatOptionsCsv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

---

##### `excelInput`<sup>Optional</sup> <a name="excelInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excelInput"></a>

```typescript
public readonly excelInput: IResolvable | DatabrewDatasetFormatOptionsExcel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.jsonInput"></a>

```typescript
public readonly jsonInput: IResolvable | DatabrewDatasetFormatOptionsJson;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetFormatOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

---


### DatabrewDatasetInputDatabaseInputDefinitionOutputReference <a name="DatabrewDatasetInputDatabaseInputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory">putTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetDatabaseTableName">resetDatabaseTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetGlueConnectionName">resetGlueConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetTempDirectory">resetTempDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTempDirectory` <a name="putTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory"></a>

```typescript
public putTempDirectory(value: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---

##### `resetDatabaseTableName` <a name="resetDatabaseTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetDatabaseTableName"></a>

```typescript
public resetDatabaseTableName(): void
```

##### `resetGlueConnectionName` <a name="resetGlueConnectionName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetGlueConnectionName"></a>

```typescript
public resetGlueConnectionName(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```

##### `resetTempDirectory` <a name="resetTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetTempDirectory"></a>

```typescript
public resetTempDirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableNameInput">databaseTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionNameInput">glueConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectoryInput">tempDirectoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableName">databaseTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tempDirectory`<sup>Required</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectory"></a>

```typescript
public readonly tempDirectory: DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference</a>

---

##### `databaseTableNameInput`<sup>Optional</sup> <a name="databaseTableNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableNameInput"></a>

```typescript
public readonly databaseTableNameInput: string;
```

- *Type:* string

---

##### `glueConnectionNameInput`<sup>Optional</sup> <a name="glueConnectionNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionNameInput"></a>

```typescript
public readonly glueConnectionNameInput: string;
```

- *Type:* string

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `tempDirectoryInput`<sup>Optional</sup> <a name="tempDirectoryInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectoryInput"></a>

```typescript
public readonly tempDirectoryInput: IResolvable | DatabrewDatasetInputDatabaseInputDefinitionTempDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---

##### `databaseTableName`<sup>Required</sup> <a name="databaseTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableName"></a>

```typescript
public readonly databaseTableName: string;
```

- *Type:* string

---

##### `glueConnectionName`<sup>Required</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetInputDatabaseInputDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

---


### DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference <a name="DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetInputDatabaseInputDefinitionTempDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---


### DatabrewDatasetInputDataCatalogInputDefinitionOutputReference <a name="DatabrewDatasetInputDataCatalogInputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory">putTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTempDirectory">resetTempDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTempDirectory` <a name="putTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory"></a>

```typescript
public putTempDirectory(value: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetTempDirectory` <a name="resetTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTempDirectory"></a>

```typescript
public resetTempDirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectoryInput">tempDirectoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tempDirectory`<sup>Required</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectory"></a>

```typescript
public readonly tempDirectory: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tempDirectoryInput`<sup>Optional</sup> <a name="tempDirectoryInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectoryInput"></a>

```typescript
public readonly tempDirectoryInput: IResolvable | DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetInputDataCatalogInputDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

---


### DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference <a name="DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---


### DatabrewDatasetInputMetadataOutputReference <a name="DatabrewDatasetInputMetadataOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetInputMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resetSourceArn">resetSourceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceArn` <a name="resetSourceArn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resetSourceArn"></a>

```typescript
public resetSourceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArnInput">sourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArnInput"></a>

```typescript
public readonly sourceArnInput: string;
```

- *Type:* string

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetInputMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

---


### DatabrewDatasetInputOutputReference <a name="DatabrewDatasetInputOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition">putDatabaseInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition">putDataCatalogInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition">putS3InputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDatabaseInputDefinition">resetDatabaseInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDataCatalogInputDefinition">resetDataCatalogInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetS3InputDefinition">resetS3InputDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseInputDefinition` <a name="putDatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition"></a>

```typescript
public putDatabaseInputDefinition(value: DatabrewDatasetInputDatabaseInputDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

---

##### `putDataCatalogInputDefinition` <a name="putDataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition"></a>

```typescript
public putDataCatalogInputDefinition(value: DatabrewDatasetInputDataCatalogInputDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata"></a>

```typescript
public putMetadata(value: DatabrewDatasetInputMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

---

##### `putS3InputDefinition` <a name="putS3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition"></a>

```typescript
public putS3InputDefinition(value: DatabrewDatasetInputS3InputDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

---

##### `resetDatabaseInputDefinition` <a name="resetDatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDatabaseInputDefinition"></a>

```typescript
public resetDatabaseInputDefinition(): void
```

##### `resetDataCatalogInputDefinition` <a name="resetDataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDataCatalogInputDefinition"></a>

```typescript
public resetDataCatalogInputDefinition(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetS3InputDefinition` <a name="resetS3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetS3InputDefinition"></a>

```typescript
public resetS3InputDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinition">databaseInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference">DatabrewDatasetInputDatabaseInputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinition">dataCatalogInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference">DatabrewDatasetInputMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinition">s3InputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference">DatabrewDatasetInputS3InputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinitionInput">databaseInputDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinitionInput">dataCatalogInputDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadataInput">metadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinitionInput">s3InputDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInputDefinition`<sup>Required</sup> <a name="databaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinition"></a>

```typescript
public readonly databaseInputDefinition: DatabrewDatasetInputDatabaseInputDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference">DatabrewDatasetInputDatabaseInputDefinitionOutputReference</a>

---

##### `dataCatalogInputDefinition`<sup>Required</sup> <a name="dataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinition"></a>

```typescript
public readonly dataCatalogInputDefinition: DatabrewDatasetInputDataCatalogInputDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadata"></a>

```typescript
public readonly metadata: DatabrewDatasetInputMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference">DatabrewDatasetInputMetadataOutputReference</a>

---

##### `s3InputDefinition`<sup>Required</sup> <a name="s3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinition"></a>

```typescript
public readonly s3InputDefinition: DatabrewDatasetInputS3InputDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference">DatabrewDatasetInputS3InputDefinitionOutputReference</a>

---

##### `databaseInputDefinitionInput`<sup>Optional</sup> <a name="databaseInputDefinitionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinitionInput"></a>

```typescript
public readonly databaseInputDefinitionInput: IResolvable | DatabrewDatasetInputDatabaseInputDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

---

##### `dataCatalogInputDefinitionInput`<sup>Optional</sup> <a name="dataCatalogInputDefinitionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinitionInput"></a>

```typescript
public readonly dataCatalogInputDefinitionInput: IResolvable | DatabrewDatasetInputDataCatalogInputDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: IResolvable | DatabrewDatasetInputMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

---

##### `s3InputDefinitionInput`<sup>Optional</sup> <a name="s3InputDefinitionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinitionInput"></a>

```typescript
public readonly s3InputDefinitionInput: IResolvable | DatabrewDatasetInputS3InputDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

---


### DatabrewDatasetInputS3InputDefinitionOutputReference <a name="DatabrewDatasetInputS3InputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetInputS3InputDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

---


### DatabrewDatasetPathOptionsFilesLimitOutputReference <a name="DatabrewDatasetPathOptionsFilesLimitOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetMaxFiles">resetMaxFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrderedBy">resetOrderedBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxFiles` <a name="resetMaxFiles" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetMaxFiles"></a>

```typescript
public resetMaxFiles(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetOrderedBy` <a name="resetOrderedBy" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrderedBy"></a>

```typescript
public resetOrderedBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFilesInput">maxFilesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedByInput">orderedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFiles">maxFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedBy">orderedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxFilesInput`<sup>Optional</sup> <a name="maxFilesInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFilesInput"></a>

```typescript
public readonly maxFilesInput: number;
```

- *Type:* number

---

##### `orderedByInput`<sup>Optional</sup> <a name="orderedByInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedByInput"></a>

```typescript
public readonly orderedByInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `maxFiles`<sup>Required</sup> <a name="maxFiles" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFiles"></a>

```typescript
public readonly maxFiles: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `orderedBy`<sup>Required</sup> <a name="orderedBy" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedBy"></a>

```typescript
public readonly orderedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptionsFilesLimit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap">putValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetValuesMap">resetValuesMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValuesMap` <a name="putValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap"></a>

```typescript
public putValuesMap(value: IResolvable | DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]

---

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetValuesMap` <a name="resetValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetValuesMap"></a>

```typescript
public resetValuesMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMap">valuesMap</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMapInput">valuesMapInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesMap`<sup>Required</sup> <a name="valuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMap"></a>

```typescript
public readonly valuesMap: DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList</a>

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `valuesMapInput`<sup>Optional</sup> <a name="valuesMapInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMapInput"></a>

```typescript
public readonly valuesMapInput: IResolvable | DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptionsLastModifiedDateCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get"></a>

```typescript
public get(index: number): DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValueReference">resetValueReference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueReference` <a name="resetValueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValueReference"></a>

```typescript
public resetValueReference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReferenceInput">valueReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReference">valueReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valueReferenceInput`<sup>Optional</sup> <a name="valueReferenceInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReferenceInput"></a>

```typescript
public readonly valueReferenceInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueReference`<sup>Required</sup> <a name="valueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReference"></a>

```typescript
public readonly valueReference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>

---


### DatabrewDatasetPathOptionsOutputReference <a name="DatabrewDatasetPathOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit">putFilesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition">putLastModifiedDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetFilesLimit">resetFilesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetLastModifiedDateCondition">resetLastModifiedDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilesLimit` <a name="putFilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit"></a>

```typescript
public putFilesLimit(value: DatabrewDatasetPathOptionsFilesLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

---

##### `putLastModifiedDateCondition` <a name="putLastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition"></a>

```typescript
public putLastModifiedDateCondition(value: DatabrewDatasetPathOptionsLastModifiedDateCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | DatabrewDatasetPathOptionsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]

---

##### `resetFilesLimit` <a name="resetFilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetFilesLimit"></a>

```typescript
public resetFilesLimit(): void
```

##### `resetLastModifiedDateCondition` <a name="resetLastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetLastModifiedDateCondition"></a>

```typescript
public resetLastModifiedDateCondition(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimit">filesLimit</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference">DatabrewDatasetPathOptionsFilesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateCondition">lastModifiedDateCondition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference">DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList">DatabrewDatasetPathOptionsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimitInput">filesLimitInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateConditionInput">lastModifiedDateConditionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesLimit`<sup>Required</sup> <a name="filesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimit"></a>

```typescript
public readonly filesLimit: DatabrewDatasetPathOptionsFilesLimitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference">DatabrewDatasetPathOptionsFilesLimitOutputReference</a>

---

##### `lastModifiedDateCondition`<sup>Required</sup> <a name="lastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateCondition"></a>

```typescript
public readonly lastModifiedDateCondition: DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference">DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DatabrewDatasetPathOptionsParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList">DatabrewDatasetPathOptionsParametersList</a>

---

##### `filesLimitInput`<sup>Optional</sup> <a name="filesLimitInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimitInput"></a>

```typescript
public readonly filesLimitInput: IResolvable | DatabrewDatasetPathOptionsFilesLimit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

---

##### `lastModifiedDateConditionInput`<sup>Optional</sup> <a name="lastModifiedDateConditionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateConditionInput"></a>

```typescript
public readonly lastModifiedDateConditionInput: IResolvable | DatabrewDatasetPathOptionsLastModifiedDateCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | DatabrewDatasetPathOptionsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetLocaleCode">resetLocaleCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetTimezoneOffset">resetTimezoneOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetLocaleCode` <a name="resetLocaleCode" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetLocaleCode"></a>

```typescript
public resetLocaleCode(): void
```

##### `resetTimezoneOffset` <a name="resetTimezoneOffset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetTimezoneOffset"></a>

```typescript
public resetTimezoneOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCodeInput">localeCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffsetInput">timezoneOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCode">localeCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffset">timezoneOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `localeCodeInput`<sup>Optional</sup> <a name="localeCodeInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCodeInput"></a>

```typescript
public readonly localeCodeInput: string;
```

- *Type:* string

---

##### `timezoneOffsetInput`<sup>Optional</sup> <a name="timezoneOffsetInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffsetInput"></a>

```typescript
public readonly timezoneOffsetInput: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `localeCode`<sup>Required</sup> <a name="localeCode" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCode"></a>

```typescript
public readonly localeCode: string;
```

- *Type:* string

---

##### `timezoneOffset`<sup>Required</sup> <a name="timezoneOffset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffset"></a>

```typescript
public readonly timezoneOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap">putValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetValuesMap">resetValuesMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValuesMap` <a name="putValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap"></a>

```typescript
public putValuesMap(value: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]

---

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetValuesMap` <a name="resetValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetValuesMap"></a>

```typescript
public resetValuesMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMap">valuesMap</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMapInput">valuesMapInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesMap`<sup>Required</sup> <a name="valuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMap"></a>

```typescript
public readonly valuesMap: DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList</a>

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `valuesMapInput`<sup>Optional</sup> <a name="valuesMapInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMapInput"></a>

```typescript
public readonly valuesMapInput: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get"></a>

```typescript
public get(index: number): DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValueReference">resetValueReference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueReference` <a name="resetValueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValueReference"></a>

```typescript
public resetValueReference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReferenceInput">valueReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReference">valueReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valueReferenceInput`<sup>Optional</sup> <a name="valueReferenceInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReferenceInput"></a>

```typescript
public readonly valueReferenceInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueReference`<sup>Required</sup> <a name="valueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReference"></a>

```typescript
public readonly valueReference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions">putDatetimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetCreateColumn">resetCreateColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetDatetimeOptions">resetDatetimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatetimeOptions` <a name="putDatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions"></a>

```typescript
public putDatetimeOptions(value: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter"></a>

```typescript
public putFilter(value: DatabrewDatasetPathOptionsParametersDatasetParameterFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---

##### `resetCreateColumn` <a name="resetCreateColumn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetCreateColumn"></a>

```typescript
public resetCreateColumn(): void
```

##### `resetDatetimeOptions` <a name="resetDatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetDatetimeOptions"></a>

```typescript
public resetDatetimeOptions(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptions">datetimeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumnInput">createColumnInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptionsInput">datetimeOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumn">createColumn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datetimeOptions`<sup>Required</sup> <a name="datetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptions"></a>

```typescript
public readonly datetimeOptions: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filter"></a>

```typescript
public readonly filter: DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference</a>

---

##### `createColumnInput`<sup>Optional</sup> <a name="createColumnInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumnInput"></a>

```typescript
public readonly createColumnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `datetimeOptionsInput`<sup>Optional</sup> <a name="datetimeOptionsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptionsInput"></a>

```typescript
public readonly datetimeOptionsInput: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `createColumn`<sup>Required</sup> <a name="createColumn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumn"></a>

```typescript
public readonly createColumn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

---


### DatabrewDatasetPathOptionsParametersList <a name="DatabrewDatasetPathOptionsParametersList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get"></a>

```typescript
public get(index: number): DatabrewDatasetPathOptionsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptionsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]

---


### DatabrewDatasetPathOptionsParametersOutputReference <a name="DatabrewDatasetPathOptionsParametersOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter">putDatasetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetDatasetParameter">resetDatasetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetPathParameterName">resetPathParameterName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetParameter` <a name="putDatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter"></a>

```typescript
public putDatasetParameter(value: DatabrewDatasetPathOptionsParametersDatasetParameter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

---

##### `resetDatasetParameter` <a name="resetDatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetDatasetParameter"></a>

```typescript
public resetDatasetParameter(): void
```

##### `resetPathParameterName` <a name="resetPathParameterName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetPathParameterName"></a>

```typescript
public resetPathParameterName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameter">datasetParameter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameterInput">datasetParameterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterNameInput">pathParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterName">pathParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetParameter`<sup>Required</sup> <a name="datasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameter"></a>

```typescript
public readonly datasetParameter: DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference</a>

---

##### `datasetParameterInput`<sup>Optional</sup> <a name="datasetParameterInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameterInput"></a>

```typescript
public readonly datasetParameterInput: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

---

##### `pathParameterNameInput`<sup>Optional</sup> <a name="pathParameterNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterNameInput"></a>

```typescript
public readonly pathParameterNameInput: string;
```

- *Type:* string

---

##### `pathParameterName`<sup>Required</sup> <a name="pathParameterName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterName"></a>

```typescript
public readonly pathParameterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetPathOptionsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>

---


### DatabrewDatasetTagsList <a name="DatabrewDatasetTagsList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get"></a>

```typescript
public get(index: number): DatabrewDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]

---


### DatabrewDatasetTagsOutputReference <a name="DatabrewDatasetTagsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer"></a>

```typescript
import { databrewDataset } from '@cdktn/provider-awscc'

new databrewDataset.DatabrewDatasetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewDatasetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>

---



