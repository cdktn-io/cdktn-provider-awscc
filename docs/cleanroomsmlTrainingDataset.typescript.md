# `cleanroomsmlTrainingDataset` Submodule <a name="`cleanroomsmlTrainingDataset` Submodule" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsmlTrainingDataset <a name="CleanroomsmlTrainingDataset" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset awscc_cleanroomsml_training_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

new cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset(scope: Construct, id: string, config: CleanroomsmlTrainingDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig">CleanroomsmlTrainingDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig">CleanroomsmlTrainingDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTrainingData">putTrainingData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTags"></a>

```typescript
public putTags(value: IResolvable | CleanroomsmlTrainingDatasetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>[]

---

##### `putTrainingData` <a name="putTrainingData" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTrainingData"></a>

```typescript
public putTrainingData(value: IResolvable | CleanroomsmlTrainingDatasetTrainingData[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTrainingData.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsmlTrainingDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isConstruct"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformElement"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformResource"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CleanroomsmlTrainingDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsmlTrainingDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsmlTrainingDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsmlTrainingDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList">CleanroomsmlTrainingDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingData">trainingData</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList">CleanroomsmlTrainingDatasetTrainingDataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDatasetArn">trainingDatasetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDataInput">trainingDataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tags"></a>

```typescript
public readonly tags: CleanroomsmlTrainingDatasetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList">CleanroomsmlTrainingDatasetTagsList</a>

---

##### `trainingData`<sup>Required</sup> <a name="trainingData" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingData"></a>

```typescript
public readonly trainingData: CleanroomsmlTrainingDatasetTrainingDataList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList">CleanroomsmlTrainingDatasetTrainingDataList</a>

---

##### `trainingDatasetArn`<sup>Required</sup> <a name="trainingDatasetArn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDatasetArn"></a>

```typescript
public readonly trainingDatasetArn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CleanroomsmlTrainingDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>[]

---

##### `trainingDataInput`<sup>Optional</sup> <a name="trainingDataInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDataInput"></a>

```typescript
public readonly trainingDataInput: IResolvable | CleanroomsmlTrainingDatasetTrainingData[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsmlTrainingDatasetConfig <a name="CleanroomsmlTrainingDatasetConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

const cleanroomsmlTrainingDatasetConfig: cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#name CleanroomsmlTrainingDataset#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#role_arn CleanroomsmlTrainingDataset#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.trainingData">trainingData</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#training_data CleanroomsmlTrainingDataset#training_data}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#description CleanroomsmlTrainingDataset#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#name CleanroomsmlTrainingDataset#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#role_arn CleanroomsmlTrainingDataset#role_arn}.

---

##### `trainingData`<sup>Required</sup> <a name="trainingData" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.trainingData"></a>

```typescript
public readonly trainingData: IResolvable | CleanroomsmlTrainingDatasetTrainingData[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#training_data CleanroomsmlTrainingDataset#training_data}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#description CleanroomsmlTrainingDataset#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CleanroomsmlTrainingDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>[]

An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#tags CleanroomsmlTrainingDataset#tags}

---

### CleanroomsmlTrainingDatasetTags <a name="CleanroomsmlTrainingDatasetTags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

const cleanroomsmlTrainingDatasetTags: cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#key CleanroomsmlTrainingDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#value CleanroomsmlTrainingDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#key CleanroomsmlTrainingDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#value CleanroomsmlTrainingDataset#value}.

---

### CleanroomsmlTrainingDatasetTrainingData <a name="CleanroomsmlTrainingDatasetTrainingData" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

const cleanroomsmlTrainingDatasetTrainingData: cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.inputConfig">inputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#input_config CleanroomsmlTrainingDataset#input_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#type CleanroomsmlTrainingDataset#type}. |

---

##### `inputConfig`<sup>Required</sup> <a name="inputConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.inputConfig"></a>

```typescript
public readonly inputConfig: CleanroomsmlTrainingDatasetTrainingDataInputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#input_config CleanroomsmlTrainingDataset#input_config}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#type CleanroomsmlTrainingDataset#type}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfig <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

const cleanroomsmlTrainingDatasetTrainingDataInputConfig: cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#data_source CleanroomsmlTrainingDataset#data_source}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.schema">schema</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#schema CleanroomsmlTrainingDataset#schema}. |

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.dataSource"></a>

```typescript
public readonly dataSource: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#data_source CleanroomsmlTrainingDataset#data_source}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.schema"></a>

```typescript
public readonly schema: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#schema CleanroomsmlTrainingDataset#schema}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

const cleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource: cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource.property.glueDataSource">glueDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#glue_data_source CleanroomsmlTrainingDataset#glue_data_source}. |

---

##### `glueDataSource`<sup>Required</sup> <a name="glueDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource.property.glueDataSource"></a>

```typescript
public readonly glueDataSource: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#glue_data_source CleanroomsmlTrainingDataset#glue_data_source}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

const cleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource: cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#database_name CleanroomsmlTrainingDataset#database_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#table_name CleanroomsmlTrainingDataset#table_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#catalog_id CleanroomsmlTrainingDataset#catalog_id}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#database_name CleanroomsmlTrainingDataset#database_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#table_name CleanroomsmlTrainingDataset#table_name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#catalog_id CleanroomsmlTrainingDataset#catalog_id}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

const cleanroomsmlTrainingDatasetTrainingDataInputConfigSchema: cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#column_name CleanroomsmlTrainingDataset#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnTypes">columnTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#column_types CleanroomsmlTrainingDataset#column_types}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#column_name CleanroomsmlTrainingDataset#column_name}.

---

##### `columnTypes`<sup>Required</sup> <a name="columnTypes" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnTypes"></a>

```typescript
public readonly columnTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_training_dataset#column_types CleanroomsmlTrainingDataset#column_types}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsmlTrainingDatasetTagsList <a name="CleanroomsmlTrainingDatasetTagsList" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

new cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.get"></a>

```typescript
public get(index: number): CleanroomsmlTrainingDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlTrainingDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>[]

---


### CleanroomsmlTrainingDatasetTagsOutputReference <a name="CleanroomsmlTrainingDatasetTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

new cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlTrainingDatasetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

new cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

new cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.putGlueDataSource">putGlueDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlueDataSource` <a name="putGlueDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.putGlueDataSource"></a>

```typescript
public putGlueDataSource(value: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.putGlueDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSource">glueDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSourceInput">glueDataSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueDataSource`<sup>Required</sup> <a name="glueDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSource"></a>

```typescript
public readonly glueDataSource: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference</a>

---

##### `glueDataSourceInput`<sup>Optional</sup> <a name="glueDataSourceInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSourceInput"></a>

```typescript
public readonly glueDataSourceInput: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

new cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putDataSource">putDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putSchema">putSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSource` <a name="putDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putDataSource"></a>

```typescript
public putDataSource(value: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putSchema"></a>

```typescript
public putSchema(value: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putSchema.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schemaInput">schemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schema"></a>

```typescript
public readonly schema: CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList</a>

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a>

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

new cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get"></a>

```typescript
public get(index: number): CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>[]

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

new cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypesInput">columnTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypes">columnTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `columnTypesInput`<sup>Optional</sup> <a name="columnTypesInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypesInput"></a>

```typescript
public readonly columnTypesInput: string[];
```

- *Type:* string[]

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `columnTypes`<sup>Required</sup> <a name="columnTypes" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypes"></a>

```typescript
public readonly columnTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>

---


### CleanroomsmlTrainingDatasetTrainingDataList <a name="CleanroomsmlTrainingDatasetTrainingDataList" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

new cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.get"></a>

```typescript
public get(index: number): CleanroomsmlTrainingDatasetTrainingDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlTrainingDatasetTrainingData[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>[]

---


### CleanroomsmlTrainingDatasetTrainingDataOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlTrainingDataset } from '@cdktn/provider-awscc'

new cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.putInputConfig">putInputConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputConfig` <a name="putInputConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.putInputConfig"></a>

```typescript
public putInputConfig(value: CleanroomsmlTrainingDatasetTrainingDataInputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.putInputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfig">inputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfigInput">inputConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputConfig`<sup>Required</sup> <a name="inputConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfig"></a>

```typescript
public readonly inputConfig: CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference</a>

---

##### `inputConfigInput`<sup>Optional</sup> <a name="inputConfigInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfigInput"></a>

```typescript
public readonly inputConfigInput: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlTrainingDatasetTrainingData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>

---



