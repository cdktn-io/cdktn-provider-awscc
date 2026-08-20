# `iotsitewiseDataset` Submodule <a name="`iotsitewiseDataset` Submodule" id="@cdktn/provider-awscc.iotsitewiseDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseDataset <a name="IotsitewiseDataset" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset awscc_iotsitewise_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

new iotsitewiseDataset.IotsitewiseDataset(scope: Construct, id: string, config: IotsitewiseDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig">IotsitewiseDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig">IotsitewiseDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putDatasetSource">putDatasetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetDatasetDescription">resetDatasetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatasetSource` <a name="putDatasetSource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putDatasetSource"></a>

```typescript
public putDatasetSource(value: IotsitewiseDatasetDatasetSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putDatasetSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putTags"></a>

```typescript
public putTags(value: IResolvable | IotsitewiseDatasetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>[]

---

##### `resetDatasetDescription` <a name="resetDatasetDescription" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetDatasetDescription"></a>

```typescript
public resetDatasetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isConstruct"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

iotsitewiseDataset.IotsitewiseDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformElement"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

iotsitewiseDataset.IotsitewiseDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformResource"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

iotsitewiseDataset.IotsitewiseDataset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotsitewiseDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotsitewiseDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotsitewiseDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetArn">datasetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSource">datasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference">IotsitewiseDatasetDatasetSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList">IotsitewiseDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescriptionInput">datasetDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetNameInput">datasetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSourceInput">datasetSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescription">datasetDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetName">datasetName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datasetArn`<sup>Required</sup> <a name="datasetArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetArn"></a>

```typescript
public readonly datasetArn: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `datasetSource`<sup>Required</sup> <a name="datasetSource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSource"></a>

```typescript
public readonly datasetSource: IotsitewiseDatasetDatasetSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference">IotsitewiseDatasetDatasetSourceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tags"></a>

```typescript
public readonly tags: IotsitewiseDatasetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList">IotsitewiseDatasetTagsList</a>

---

##### `datasetDescriptionInput`<sup>Optional</sup> <a name="datasetDescriptionInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescriptionInput"></a>

```typescript
public readonly datasetDescriptionInput: string;
```

- *Type:* string

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetNameInput"></a>

```typescript
public readonly datasetNameInput: string;
```

- *Type:* string

---

##### `datasetSourceInput`<sup>Optional</sup> <a name="datasetSourceInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSourceInput"></a>

```typescript
public readonly datasetSourceInput: IResolvable | IotsitewiseDatasetDatasetSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotsitewiseDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>[]

---

##### `datasetDescription`<sup>Required</sup> <a name="datasetDescription" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescription"></a>

```typescript
public readonly datasetDescription: string;
```

- *Type:* string

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseDatasetConfig <a name="IotsitewiseDatasetConfig" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.Initializer"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

const iotsitewiseDatasetConfig: iotsitewiseDataset.IotsitewiseDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetName">datasetName</a></code> | <code>string</code> | The name of the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetSource">datasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a></code> | The data source for the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetDescription">datasetDescription</a></code> | <code>string</code> | A description about the dataset, and its functionality. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

The name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#dataset_name IotsitewiseDataset#dataset_name}

---

##### `datasetSource`<sup>Required</sup> <a name="datasetSource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetSource"></a>

```typescript
public readonly datasetSource: IotsitewiseDatasetDatasetSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

The data source for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#dataset_source IotsitewiseDataset#dataset_source}

---

##### `datasetDescription`<sup>Optional</sup> <a name="datasetDescription" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetDescription"></a>

```typescript
public readonly datasetDescription: string;
```

- *Type:* string

A description about the dataset, and its functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#dataset_description IotsitewiseDataset#dataset_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotsitewiseDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#tags IotsitewiseDataset#tags}

---

### IotsitewiseDatasetDatasetSource <a name="IotsitewiseDatasetDatasetSource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.Initializer"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

const iotsitewiseDatasetDatasetSource: iotsitewiseDataset.IotsitewiseDatasetDatasetSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceFormat">sourceFormat</a></code> | <code>string</code> | The format of the dataset source associated with the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceType">sourceType</a></code> | <code>string</code> | The type of data source for the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceDetail">sourceDetail</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a></code> | The details of the dataset source associated with the dataset. |

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceFormat"></a>

```typescript
public readonly sourceFormat: string;
```

- *Type:* string

The format of the dataset source associated with the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#source_format IotsitewiseDataset#source_format}

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

The type of data source for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#source_type IotsitewiseDataset#source_type}

---

##### `sourceDetail`<sup>Optional</sup> <a name="sourceDetail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceDetail"></a>

```typescript
public readonly sourceDetail: IotsitewiseDatasetDatasetSourceSourceDetail;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

The details of the dataset source associated with the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#source_detail IotsitewiseDataset#source_detail}

---

### IotsitewiseDatasetDatasetSourceSourceDetail <a name="IotsitewiseDatasetDatasetSourceSourceDetail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail.Initializer"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

const iotsitewiseDatasetDatasetSourceSourceDetail: iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail.property.kendra">kendra</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a></code> | Contains details about the Kendra dataset source. |

---

##### `kendra`<sup>Optional</sup> <a name="kendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail.property.kendra"></a>

```typescript
public readonly kendra: IotsitewiseDatasetDatasetSourceSourceDetailKendra;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

Contains details about the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#kendra IotsitewiseDataset#kendra}

---

### IotsitewiseDatasetDatasetSourceSourceDetailKendra <a name="IotsitewiseDatasetDatasetSourceSourceDetailKendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.Initializer"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

const iotsitewiseDatasetDatasetSourceSourceDetailKendra: iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | The knowledgeBaseArn details for the Kendra dataset source. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.roleArn">roleArn</a></code> | <code>string</code> | The roleARN details for the Kendra dataset source. |

---

##### `knowledgeBaseArn`<sup>Optional</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

The knowledgeBaseArn details for the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#knowledge_base_arn IotsitewiseDataset#knowledge_base_arn}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The roleARN details for the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#role_arn IotsitewiseDataset#role_arn}

---

### IotsitewiseDatasetTags <a name="IotsitewiseDatasetTags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.Initializer"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

const iotsitewiseDatasetTags: iotsitewiseDataset.IotsitewiseDatasetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#key IotsitewiseDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#value IotsitewiseDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#key IotsitewiseDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_dataset#value IotsitewiseDataset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseDatasetDatasetSourceOutputReference <a name="IotsitewiseDatasetDatasetSourceOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

new iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.putSourceDetail">putSourceDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resetSourceDetail">resetSourceDetail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceDetail` <a name="putSourceDetail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.putSourceDetail"></a>

```typescript
public putSourceDetail(value: IotsitewiseDatasetDatasetSourceSourceDetail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.putSourceDetail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

---

##### `resetSourceDetail` <a name="resetSourceDetail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resetSourceDetail"></a>

```typescript
public resetSourceDetail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetail">sourceDetail</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetailInput">sourceDetailInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormatInput">sourceFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormat">sourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceDetail`<sup>Required</sup> <a name="sourceDetail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetail"></a>

```typescript
public readonly sourceDetail: IotsitewiseDatasetDatasetSourceSourceDetailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailOutputReference</a>

---

##### `sourceDetailInput`<sup>Optional</sup> <a name="sourceDetailInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetailInput"></a>

```typescript
public readonly sourceDetailInput: IResolvable | IotsitewiseDatasetDatasetSourceSourceDetail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

---

##### `sourceFormatInput`<sup>Optional</sup> <a name="sourceFormatInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormatInput"></a>

```typescript
public readonly sourceFormatInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormat"></a>

```typescript
public readonly sourceFormat: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewiseDatasetDatasetSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

---


### IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference <a name="IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

new iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetKnowledgeBaseArn">resetKnowledgeBaseArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKnowledgeBaseArn` <a name="resetKnowledgeBaseArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetKnowledgeBaseArn"></a>

```typescript
public resetKnowledgeBaseArn(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArnInput">knowledgeBaseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `knowledgeBaseArnInput`<sup>Optional</sup> <a name="knowledgeBaseArnInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArnInput"></a>

```typescript
public readonly knowledgeBaseArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewiseDatasetDatasetSourceSourceDetailKendra;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

---


### IotsitewiseDatasetDatasetSourceSourceDetailOutputReference <a name="IotsitewiseDatasetDatasetSourceSourceDetailOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

new iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.putKendra">putKendra</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resetKendra">resetKendra</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKendra` <a name="putKendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.putKendra"></a>

```typescript
public putKendra(value: IotsitewiseDatasetDatasetSourceSourceDetailKendra): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.putKendra.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

---

##### `resetKendra` <a name="resetKendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resetKendra"></a>

```typescript
public resetKendra(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendra">kendra</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendraInput">kendraInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kendra`<sup>Required</sup> <a name="kendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendra"></a>

```typescript
public readonly kendra: IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference</a>

---

##### `kendraInput`<sup>Optional</sup> <a name="kendraInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendraInput"></a>

```typescript
public readonly kendraInput: IResolvable | IotsitewiseDatasetDatasetSourceSourceDetailKendra;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewiseDatasetDatasetSourceSourceDetail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

---


### IotsitewiseDatasetTagsList <a name="IotsitewiseDatasetTagsList" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

new iotsitewiseDataset.IotsitewiseDatasetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.get"></a>

```typescript
public get(index: number): IotsitewiseDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewiseDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>[]

---


### IotsitewiseDatasetTagsOutputReference <a name="IotsitewiseDatasetTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer"></a>

```typescript
import { iotsitewiseDataset } from '@cdktn/provider-awscc'

new iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewiseDatasetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>

---



