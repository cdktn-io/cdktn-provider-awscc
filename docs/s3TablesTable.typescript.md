# `s3TablesTable` Submodule <a name="`s3TablesTable` Submodule" id="@cdktn/provider-awscc.s3TablesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTable <a name="S3TablesTable" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table awscc_s3tables_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTable(scope: Construct, id: string, config: S3TablesTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig">S3TablesTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig">S3TablesTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction">putCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata">putIcebergMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement">putSnapshotManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration">putStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetCompaction">resetCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetIcebergMetadata">resetIcebergMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetSnapshotManagement">resetSnapshotManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetStorageClassConfiguration">resetStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetWithoutMetadata">resetWithoutMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCompaction` <a name="putCompaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction"></a>

```typescript
public putCompaction(value: S3TablesTableCompaction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

---

##### `putIcebergMetadata` <a name="putIcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata"></a>

```typescript
public putIcebergMetadata(value: S3TablesTableIcebergMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

---

##### `putSnapshotManagement` <a name="putSnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement"></a>

```typescript
public putSnapshotManagement(value: S3TablesTableSnapshotManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

---

##### `putStorageClassConfiguration` <a name="putStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration"></a>

```typescript
public putStorageClassConfiguration(value: S3TablesTableStorageClassConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags"></a>

```typescript
public putTags(value: IResolvable | S3TablesTableTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]

---

##### `resetCompaction` <a name="resetCompaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetCompaction"></a>

```typescript
public resetCompaction(): void
```

##### `resetIcebergMetadata` <a name="resetIcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetIcebergMetadata"></a>

```typescript
public resetIcebergMetadata(): void
```

##### `resetSnapshotManagement` <a name="resetSnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetSnapshotManagement"></a>

```typescript
public resetSnapshotManagement(): void
```

##### `resetStorageClassConfiguration` <a name="resetStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetStorageClassConfiguration"></a>

```typescript
public resetStorageClassConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWithoutMetadata` <a name="resetWithoutMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetWithoutMetadata"></a>

```typescript
public resetWithoutMetadata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3TablesTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

s3TablesTable.S3TablesTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

s3TablesTable.S3TablesTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

s3TablesTable.S3TablesTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

s3TablesTable.S3TablesTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3TablesTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3TablesTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3TablesTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3TablesTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compaction">compaction</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference">S3TablesTableCompactionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadata">icebergMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference">S3TablesTableIcebergMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagement">snapshotManagement</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference">S3TablesTableSnapshotManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfiguration">storageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference">S3TablesTableStorageClassConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableArn">tableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList">S3TablesTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.versionToken">versionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.warehouseLocation">warehouseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compactionInput">compactionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadataInput">icebergMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormatInput">openTableFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagementInput">snapshotManagementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfigurationInput">storageClassConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArnInput">tableBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadataInput">withoutMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormat">openTableFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArn">tableBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadata">withoutMetadata</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `compaction`<sup>Required</sup> <a name="compaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compaction"></a>

```typescript
public readonly compaction: S3TablesTableCompactionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference">S3TablesTableCompactionOutputReference</a>

---

##### `icebergMetadata`<sup>Required</sup> <a name="icebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadata"></a>

```typescript
public readonly icebergMetadata: S3TablesTableIcebergMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference">S3TablesTableIcebergMetadataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `snapshotManagement`<sup>Required</sup> <a name="snapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagement"></a>

```typescript
public readonly snapshotManagement: S3TablesTableSnapshotManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference">S3TablesTableSnapshotManagementOutputReference</a>

---

##### `storageClassConfiguration`<sup>Required</sup> <a name="storageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfiguration"></a>

```typescript
public readonly storageClassConfiguration: S3TablesTableStorageClassConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference">S3TablesTableStorageClassConfigurationOutputReference</a>

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableArn"></a>

```typescript
public readonly tableArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tags"></a>

```typescript
public readonly tags: S3TablesTableTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList">S3TablesTableTagsList</a>

---

##### `versionToken`<sup>Required</sup> <a name="versionToken" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.versionToken"></a>

```typescript
public readonly versionToken: string;
```

- *Type:* string

---

##### `warehouseLocation`<sup>Required</sup> <a name="warehouseLocation" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.warehouseLocation"></a>

```typescript
public readonly warehouseLocation: string;
```

- *Type:* string

---

##### `compactionInput`<sup>Optional</sup> <a name="compactionInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compactionInput"></a>

```typescript
public readonly compactionInput: IResolvable | S3TablesTableCompaction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

---

##### `icebergMetadataInput`<sup>Optional</sup> <a name="icebergMetadataInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadataInput"></a>

```typescript
public readonly icebergMetadataInput: IResolvable | S3TablesTableIcebergMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `openTableFormatInput`<sup>Optional</sup> <a name="openTableFormatInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormatInput"></a>

```typescript
public readonly openTableFormatInput: string;
```

- *Type:* string

---

##### `snapshotManagementInput`<sup>Optional</sup> <a name="snapshotManagementInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagementInput"></a>

```typescript
public readonly snapshotManagementInput: IResolvable | S3TablesTableSnapshotManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

---

##### `storageClassConfigurationInput`<sup>Optional</sup> <a name="storageClassConfigurationInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfigurationInput"></a>

```typescript
public readonly storageClassConfigurationInput: IResolvable | S3TablesTableStorageClassConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

---

##### `tableBucketArnInput`<sup>Optional</sup> <a name="tableBucketArnInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArnInput"></a>

```typescript
public readonly tableBucketArnInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | S3TablesTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]

---

##### `withoutMetadataInput`<sup>Optional</sup> <a name="withoutMetadataInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadataInput"></a>

```typescript
public readonly withoutMetadataInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `openTableFormat`<sup>Required</sup> <a name="openTableFormat" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormat"></a>

```typescript
public readonly openTableFormat: string;
```

- *Type:* string

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArn"></a>

```typescript
public readonly tableBucketArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `withoutMetadata`<sup>Required</sup> <a name="withoutMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadata"></a>

```typescript
public readonly withoutMetadata: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableCompaction <a name="S3TablesTableCompaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableCompaction: s3TablesTable.S3TablesTableCompaction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.status">status</a></code> | <code>string</code> | Indicates whether the Compaction maintenance action is enabled. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.targetFileSizeMb">targetFileSizeMb</a></code> | <code>number</code> | The target file size for the table in MB. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Indicates whether the Compaction maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#status S3TablesTable#status}

---

##### `targetFileSizeMb`<sup>Optional</sup> <a name="targetFileSizeMb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.targetFileSizeMb"></a>

```typescript
public readonly targetFileSizeMb: number;
```

- *Type:* number

The target file size for the table in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}

---

### S3TablesTableConfig <a name="S3TablesTableConfig" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableConfig: s3TablesTable.S3TablesTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace that the table belongs to. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.openTableFormat">openTableFormat</a></code> | <code>string</code> | Format of the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableBucketArn">tableBucketArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the specified table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableName">tableName</a></code> | <code>string</code> | The name for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.compaction">compaction</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a></code> | Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.icebergMetadata">icebergMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a></code> | Contains details about the metadata for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.snapshotManagement">snapshotManagement</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a></code> | Contains details about the snapshot management settings for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.storageClassConfiguration">storageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a></code> | Specifies storage class settings for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]</code> | User tags (key-value pairs) to associate with the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.withoutMetadata">withoutMetadata</a></code> | <code>string</code> | Indicates that you don't want to specify a schema for the table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}

---

##### `openTableFormat`<sup>Required</sup> <a name="openTableFormat" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.openTableFormat"></a>

```typescript
public readonly openTableFormat: string;
```

- *Type:* string

Format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#open_table_format S3TablesTable#open_table_format}

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableBucketArn"></a>

```typescript
public readonly tableBucketArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the specified table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#table_name S3TablesTable#table_name}

---

##### `compaction`<sup>Optional</sup> <a name="compaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.compaction"></a>

```typescript
public readonly compaction: S3TablesTableCompaction;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#compaction S3TablesTable#compaction}

---

##### `icebergMetadata`<sup>Optional</sup> <a name="icebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.icebergMetadata"></a>

```typescript
public readonly icebergMetadata: S3TablesTableIcebergMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

Contains details about the metadata for an Iceberg table.

Specify either IcebergSchema (for simple flat schemas with primitive types only) or IcebergSchemaV2 (for schemas with nested types like struct, list, map), but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#iceberg_metadata S3TablesTable#iceberg_metadata}

---

##### `snapshotManagement`<sup>Optional</sup> <a name="snapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.snapshotManagement"></a>

```typescript
public readonly snapshotManagement: S3TablesTableSnapshotManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

Contains details about the snapshot management settings for an Iceberg table.

A snapshot is expired when it exceeds MinSnapshotsToKeep and MaxSnapshotAgeHours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#snapshot_management S3TablesTable#snapshot_management}

---

##### `storageClassConfiguration`<sup>Optional</sup> <a name="storageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.storageClassConfiguration"></a>

```typescript
public readonly storageClassConfiguration: S3TablesTableStorageClassConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

Specifies storage class settings for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#storage_class_configuration S3TablesTable#storage_class_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | S3TablesTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]

User tags (key-value pairs) to associate with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#tags S3TablesTable#tags}

---

##### `withoutMetadata`<sup>Optional</sup> <a name="withoutMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.withoutMetadata"></a>

```typescript
public readonly withoutMetadata: string;
```

- *Type:* string

Indicates that you don't want to specify a schema for the table.

This property is mutually exclusive to 'IcebergMetadata', and its only possible value is 'Yes'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#without_metadata S3TablesTable#without_metadata}

---

### S3TablesTableIcebergMetadata <a name="S3TablesTableIcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableIcebergMetadata: s3TablesTable.S3TablesTableIcebergMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergPartitionSpec">icebergPartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | Partition specification for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchema">icebergSchema</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a></code> | Schema definition for flat tables with primitive types only. Mutually exclusive with IcebergSchemaV2. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchemaV2">icebergSchemaV2</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | Schema definition that supports Apache Iceberg nested types (struct, list, map) and primitive types. Mutually exclusive with IcebergSchema. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSortOrder">icebergSortOrder</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a></code> | Sort order specification for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.tableProperties">tableProperties</a></code> | <code>{[ key: string ]: string}</code> | Iceberg table properties (e.g., format-version, write.parquet.compression-codec). |

---

##### `icebergPartitionSpec`<sup>Optional</sup> <a name="icebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergPartitionSpec"></a>

```typescript
public readonly icebergPartitionSpec: S3TablesTableIcebergMetadataIcebergPartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

Partition specification for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#iceberg_partition_spec S3TablesTable#iceberg_partition_spec}

---

##### `icebergSchema`<sup>Optional</sup> <a name="icebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchema"></a>

```typescript
public readonly icebergSchema: S3TablesTableIcebergMetadataIcebergSchema;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

Schema definition for flat tables with primitive types only. Mutually exclusive with IcebergSchemaV2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#iceberg_schema S3TablesTable#iceberg_schema}

---

##### `icebergSchemaV2`<sup>Optional</sup> <a name="icebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchemaV2"></a>

```typescript
public readonly icebergSchemaV2: S3TablesTableIcebergMetadataIcebergSchemaV2;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

Schema definition that supports Apache Iceberg nested types (struct, list, map) and primitive types. Mutually exclusive with IcebergSchema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#iceberg_schema_v2 S3TablesTable#iceberg_schema_v2}

---

##### `icebergSortOrder`<sup>Optional</sup> <a name="icebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSortOrder"></a>

```typescript
public readonly icebergSortOrder: S3TablesTableIcebergMetadataIcebergSortOrder;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

Sort order specification for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#iceberg_sort_order S3TablesTable#iceberg_sort_order}

---

##### `tableProperties`<sup>Optional</sup> <a name="tableProperties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.tableProperties"></a>

```typescript
public readonly tableProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Iceberg table properties (e.g., format-version, write.parquet.compression-codec).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#table_properties S3TablesTable#table_properties}

---

### S3TablesTableIcebergMetadataIcebergPartitionSpec <a name="S3TablesTableIcebergMetadataIcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableIcebergMetadataIcebergPartitionSpec: s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]</code> | List of partition fields. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.specId">specId</a></code> | <code>number</code> | The partition spec ID (defaults to 0 if not specified). |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.fields"></a>

```typescript
public readonly fields: IResolvable | S3TablesTableIcebergMetadataIcebergPartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]

List of partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#fields S3TablesTable#fields}

---

##### `specId`<sup>Optional</sup> <a name="specId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.specId"></a>

```typescript
public readonly specId: number;
```

- *Type:* number

The partition spec ID (defaults to 0 if not specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#spec_id S3TablesTable#spec_id}

---

### S3TablesTableIcebergMetadataIcebergPartitionSpecFields <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableIcebergMetadataIcebergPartitionSpecFields: s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.fieldId">fieldId</a></code> | <code>number</code> | The partition field ID (auto-assigned starting from 1000 if not specified). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.name">name</a></code> | <code>string</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.sourceId">sourceId</a></code> | <code>number</code> | The source column ID to partition on. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.transform">transform</a></code> | <code>string</code> | The partition transform function (identity, bucket[N], truncate[N], year, month, day, hour). |

---

##### `fieldId`<sup>Optional</sup> <a name="fieldId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.fieldId"></a>

```typescript
public readonly fieldId: number;
```

- *Type:* number

The partition field ID (auto-assigned starting from 1000 if not specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#field_id S3TablesTable#field_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

The source column ID to partition on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#source_id S3TablesTable#source_id}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

The partition transform function (identity, bucket[N], truncate[N], year, month, day, hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#transform S3TablesTable#transform}

---

### S3TablesTableIcebergMetadataIcebergSchema <a name="S3TablesTableIcebergMetadataIcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableIcebergMetadataIcebergSchema: s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.property.schemaFieldList">schemaFieldList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]</code> | Contains details about the schema for an Iceberg table. |

---

##### `schemaFieldList`<sup>Optional</sup> <a name="schemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.property.schemaFieldList"></a>

```typescript
public readonly schemaFieldList: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]

Contains details about the schema for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#schema_field_list S3TablesTable#schema_field_list}

---

### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct: s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.id">id</a></code> | <code>number</code> | The unique identifier for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.name">name</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean value that specifies whether values are required for each row in this field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.type">type</a></code> | <code>string</code> | The field type. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

The unique identifier for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#id S3TablesTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean value that specifies whether values are required for each row in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#required S3TablesTable#required}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The field type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#type S3TablesTable#type}

---

### S3TablesTableIcebergMetadataIcebergSchemaV2 <a name="S3TablesTableIcebergMetadataIcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableIcebergMetadataIcebergSchemaV2: s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.identifierFieldIds">identifierFieldIds</a></code> | <code>number[]</code> | A list of field IDs that are used as the identifier fields for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaId">schemaId</a></code> | <code>number</code> | An optional unique identifier for the schema. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldList">schemaV2FieldList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]</code> | The schema fields for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldType">schemaV2FieldType</a></code> | <code>string</code> | The type of the top-level schema, which is always 'struct'. |

---

##### `identifierFieldIds`<sup>Optional</sup> <a name="identifierFieldIds" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.identifierFieldIds"></a>

```typescript
public readonly identifierFieldIds: number[];
```

- *Type:* number[]

A list of field IDs that are used as the identifier fields for the table.

Identifier fields uniquely identify a row in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#identifier_field_ids S3TablesTable#identifier_field_ids}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaId"></a>

```typescript
public readonly schemaId: number;
```

- *Type:* number

An optional unique identifier for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#schema_id S3TablesTable#schema_id}

---

##### `schemaV2FieldList`<sup>Optional</sup> <a name="schemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldList"></a>

```typescript
public readonly schemaV2FieldList: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]

The schema fields for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#schema_v2_field_list S3TablesTable#schema_v2_field_list}

---

##### `schemaV2FieldType`<sup>Optional</sup> <a name="schemaV2FieldType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldType"></a>

```typescript
public readonly schemaV2FieldType: string;
```

- *Type:* string

The type of the top-level schema, which is always 'struct'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#schema_v2_field_type S3TablesTable#schema_v2_field_type}

---

### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct: s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.doc">doc</a></code> | <code>string</code> | Optional documentation for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.id">id</a></code> | <code>number</code> | The unique identifier for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.name">name</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean value that specifies whether values are required for each row in this field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.type">type</a></code> | <code>string</code> | The field type. |

---

##### `doc`<sup>Optional</sup> <a name="doc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

Optional documentation for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#doc S3TablesTable#doc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

The unique identifier for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#id S3TablesTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean value that specifies whether values are required for each row in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#required S3TablesTable#required}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The field type.

For primitive types, use a string (e.g., 'int', 'string', 'long'). For nested types, use an object (e.g., {'type': 'struct', 'fields': [...]} for struct, {'type': 'list', 'element-id': N, 'element': 'type'} for list, {'type': 'map', 'key-id': N, 'key': 'type', 'value-id': N, 'value': 'type'} for map).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#type S3TablesTable#type}

---

### S3TablesTableIcebergMetadataIcebergSortOrder <a name="S3TablesTableIcebergMetadataIcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableIcebergMetadataIcebergSortOrder: s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]</code> | List of sort fields. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.orderId">orderId</a></code> | <code>number</code> | The sort order ID (defaults to 1 if not specified, 0 is reserved for unsorted). |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.fields"></a>

```typescript
public readonly fields: IResolvable | S3TablesTableIcebergMetadataIcebergSortOrderFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]

List of sort fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#fields S3TablesTable#fields}

---

##### `orderId`<sup>Optional</sup> <a name="orderId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.orderId"></a>

```typescript
public readonly orderId: number;
```

- *Type:* number

The sort order ID (defaults to 1 if not specified, 0 is reserved for unsorted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#order_id S3TablesTable#order_id}

---

### S3TablesTableIcebergMetadataIcebergSortOrderFields <a name="S3TablesTableIcebergMetadataIcebergSortOrderFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableIcebergMetadataIcebergSortOrderFields: s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.direction">direction</a></code> | <code>string</code> | Sort direction (asc or desc). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.nullOrder">nullOrder</a></code> | <code>string</code> | Null value ordering (nulls-first or nulls-last). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.sourceId">sourceId</a></code> | <code>number</code> | The source column ID to sort on. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.transform">transform</a></code> | <code>string</code> | The sort transform function. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Sort direction (asc or desc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#direction S3TablesTable#direction}

---

##### `nullOrder`<sup>Optional</sup> <a name="nullOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.nullOrder"></a>

```typescript
public readonly nullOrder: string;
```

- *Type:* string

Null value ordering (nulls-first or nulls-last).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#null_order S3TablesTable#null_order}

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

The source column ID to sort on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#source_id S3TablesTable#source_id}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

The sort transform function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#transform S3TablesTable#transform}

---

### S3TablesTableSnapshotManagement <a name="S3TablesTableSnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableSnapshotManagement: s3TablesTable.S3TablesTableSnapshotManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.maxSnapshotAgeHours">maxSnapshotAgeHours</a></code> | <code>number</code> | The maximum age of a snapshot before it can be expired. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.minSnapshotsToKeep">minSnapshotsToKeep</a></code> | <code>number</code> | The minimum number of snapshots to keep. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.status">status</a></code> | <code>string</code> | Indicates whether the SnapshotManagement maintenance action is enabled. |

---

##### `maxSnapshotAgeHours`<sup>Optional</sup> <a name="maxSnapshotAgeHours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.maxSnapshotAgeHours"></a>

```typescript
public readonly maxSnapshotAgeHours: number;
```

- *Type:* number

The maximum age of a snapshot before it can be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}

---

##### `minSnapshotsToKeep`<sup>Optional</sup> <a name="minSnapshotsToKeep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.minSnapshotsToKeep"></a>

```typescript
public readonly minSnapshotsToKeep: number;
```

- *Type:* number

The minimum number of snapshots to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Indicates whether the SnapshotManagement maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#status S3TablesTable#status}

---

### S3TablesTableStorageClassConfiguration <a name="S3TablesTableStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableStorageClassConfiguration: s3TablesTable.S3TablesTableStorageClassConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.property.storageClass">storageClass</a></code> | <code>string</code> | The storage class for the table. |

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The storage class for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3tables_table#storage_class S3TablesTable#storage_class}

---

### S3TablesTableTags <a name="S3TablesTableTags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

const s3TablesTableTags: s3TablesTable.S3TablesTableTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.key">key</a></code> | <code>string</code> | Tag key must be between 1 to 128 characters in length. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.value">value</a></code> | <code>string</code> | Tag value must be between 0 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Tag key must be between 1 to 128 characters in length.

Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Tag value must be between 0 to 256 characters in length.

Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableCompactionOutputReference <a name="S3TablesTableCompactionOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableCompactionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetTargetFileSizeMb">resetTargetFileSizeMb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTargetFileSizeMb` <a name="resetTargetFileSizeMb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetTargetFileSizeMb"></a>

```typescript
public resetTargetFileSizeMb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMbInput">targetFileSizeMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMb">targetFileSizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `targetFileSizeMbInput`<sup>Optional</sup> <a name="targetFileSizeMbInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMbInput"></a>

```typescript
public readonly targetFileSizeMbInput: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `targetFileSizeMb`<sup>Required</sup> <a name="targetFileSizeMb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMb"></a>

```typescript
public readonly targetFileSizeMb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableCompaction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get"></a>

```typescript
public get(index: number): S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergPartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetFieldId">resetFieldId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetSourceId">resetSourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetTransform">resetTransform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldId` <a name="resetFieldId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetFieldId"></a>

```typescript
public resetFieldId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceId` <a name="resetSourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetSourceId"></a>

```typescript
public resetSourceId(): void
```

##### `resetTransform` <a name="resetTransform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetTransform"></a>

```typescript
public resetTransform(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldIdInput">fieldIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldIdInput`<sup>Optional</sup> <a name="fieldIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldIdInput"></a>

```typescript
public readonly fieldIdInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: number;
```

- *Type:* number

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transformInput"></a>

```typescript
public readonly transformInput: string;
```

- *Type:* string

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId"></a>

```typescript
public readonly fieldId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergPartitionSpecFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetSpecId">resetSpecId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | S3TablesTableIcebergMetadataIcebergPartitionSpecFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetSpecId` <a name="resetSpecId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetSpecId"></a>

```typescript
public resetSpecId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specIdInput">specIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId">specId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields"></a>

```typescript
public readonly fields: S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | S3TablesTableIcebergMetadataIcebergPartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]

---

##### `specIdInput`<sup>Optional</sup> <a name="specIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specIdInput"></a>

```typescript
public readonly specIdInput: number;
```

- *Type:* number

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId"></a>

```typescript
public readonly specId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergPartitionSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList">putSchemaFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resetSchemaFieldList">resetSchemaFieldList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaFieldList` <a name="putSchemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList"></a>

```typescript
public putSchemaFieldList(value: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]

---

##### `resetSchemaFieldList` <a name="resetSchemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resetSchemaFieldList"></a>

```typescript
public resetSchemaFieldList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList">schemaFieldList</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldListInput">schemaFieldListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaFieldList`<sup>Required</sup> <a name="schemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList"></a>

```typescript
public readonly schemaFieldList: S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a>

---

##### `schemaFieldListInput`<sup>Optional</sup> <a name="schemaFieldListInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldListInput"></a>

```typescript
public readonly schemaFieldListInput: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get"></a>

```typescript
public get(index: number): S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]

---


### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList">putSchemaV2FieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetIdentifierFieldIds">resetIdentifierFieldIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldList">resetSchemaV2FieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldType">resetSchemaV2FieldType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaV2FieldList` <a name="putSchemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList"></a>

```typescript
public putSchemaV2FieldList(value: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]

---

##### `resetIdentifierFieldIds` <a name="resetIdentifierFieldIds" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetIdentifierFieldIds"></a>

```typescript
public resetIdentifierFieldIds(): void
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetSchemaV2FieldList` <a name="resetSchemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldList"></a>

```typescript
public resetSchemaV2FieldList(): void
```

##### `resetSchemaV2FieldType` <a name="resetSchemaV2FieldType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldType"></a>

```typescript
public resetSchemaV2FieldType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList">schemaV2FieldList</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIdsInput">identifierFieldIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldListInput">schemaV2FieldListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldTypeInput">schemaV2FieldTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds">identifierFieldIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId">schemaId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType">schemaV2FieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaV2FieldList`<sup>Required</sup> <a name="schemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList"></a>

```typescript
public readonly schemaV2FieldList: S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a>

---

##### `identifierFieldIdsInput`<sup>Optional</sup> <a name="identifierFieldIdsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIdsInput"></a>

```typescript
public readonly identifierFieldIdsInput: number[];
```

- *Type:* number[]

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: number;
```

- *Type:* number

---

##### `schemaV2FieldListInput`<sup>Optional</sup> <a name="schemaV2FieldListInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldListInput"></a>

```typescript
public readonly schemaV2FieldListInput: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]

---

##### `schemaV2FieldTypeInput`<sup>Optional</sup> <a name="schemaV2FieldTypeInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldTypeInput"></a>

```typescript
public readonly schemaV2FieldTypeInput: string;
```

- *Type:* string

---

##### `identifierFieldIds`<sup>Required</sup> <a name="identifierFieldIds" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds"></a>

```typescript
public readonly identifierFieldIds: number[];
```

- *Type:* number[]

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: number;
```

- *Type:* number

---

##### `schemaV2FieldType`<sup>Required</sup> <a name="schemaV2FieldType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType"></a>

```typescript
public readonly schemaV2FieldType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaV2;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get"></a>

```typescript
public get(index: number): S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]

---


### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetDoc">resetDoc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDoc` <a name="resetDoc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetDoc"></a>

```typescript
public resetDoc(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.docInput">docInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc">doc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `docInput`<sup>Optional</sup> <a name="docInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.docInput"></a>

```typescript
public readonly docInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `doc`<sup>Required</sup> <a name="doc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>

---


### S3TablesTableIcebergMetadataIcebergSortOrderFieldsList <a name="S3TablesTableIcebergMetadataIcebergSortOrderFieldsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get"></a>

```typescript
public get(index: number): S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergSortOrderFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]

---


### S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference <a name="S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetNullOrder">resetNullOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetSourceId">resetSourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetTransform">resetTransform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetNullOrder` <a name="resetNullOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetNullOrder"></a>

```typescript
public resetNullOrder(): void
```

##### `resetSourceId` <a name="resetSourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetSourceId"></a>

```typescript
public resetSourceId(): void
```

##### `resetTransform` <a name="resetTransform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetTransform"></a>

```typescript
public resetTransform(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrderInput">nullOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder">nullOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `nullOrderInput`<sup>Optional</sup> <a name="nullOrderInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrderInput"></a>

```typescript
public readonly nullOrderInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: number;
```

- *Type:* number

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transformInput"></a>

```typescript
public readonly transformInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `nullOrder`<sup>Required</sup> <a name="nullOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder"></a>

```typescript
public readonly nullOrder: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergSortOrderFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>

---


### S3TablesTableIcebergMetadataIcebergSortOrderOutputReference <a name="S3TablesTableIcebergMetadataIcebergSortOrderOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetOrderId">resetOrderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | S3TablesTableIcebergMetadataIcebergSortOrderFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetOrderId` <a name="resetOrderId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetOrderId"></a>

```typescript
public resetOrderId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList">S3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderIdInput">orderIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId">orderId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields"></a>

```typescript
public readonly fields: S3TablesTableIcebergMetadataIcebergSortOrderFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList">S3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | S3TablesTableIcebergMetadataIcebergSortOrderFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]

---

##### `orderIdInput`<sup>Optional</sup> <a name="orderIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderIdInput"></a>

```typescript
public readonly orderIdInput: number;
```

- *Type:* number

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId"></a>

```typescript
public readonly orderId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadataIcebergSortOrder;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

---


### S3TablesTableIcebergMetadataOutputReference <a name="S3TablesTableIcebergMetadataOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableIcebergMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec">putIcebergPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema">putIcebergSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2">putIcebergSchemaV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder">putIcebergSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergPartitionSpec">resetIcebergPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchema">resetIcebergSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchemaV2">resetIcebergSchemaV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSortOrder">resetIcebergSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetTableProperties">resetTableProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcebergPartitionSpec` <a name="putIcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec"></a>

```typescript
public putIcebergPartitionSpec(value: S3TablesTableIcebergMetadataIcebergPartitionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

---

##### `putIcebergSchema` <a name="putIcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema"></a>

```typescript
public putIcebergSchema(value: S3TablesTableIcebergMetadataIcebergSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

---

##### `putIcebergSchemaV2` <a name="putIcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2"></a>

```typescript
public putIcebergSchemaV2(value: S3TablesTableIcebergMetadataIcebergSchemaV2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

---

##### `putIcebergSortOrder` <a name="putIcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder"></a>

```typescript
public putIcebergSortOrder(value: S3TablesTableIcebergMetadataIcebergSortOrder): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

---

##### `resetIcebergPartitionSpec` <a name="resetIcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergPartitionSpec"></a>

```typescript
public resetIcebergPartitionSpec(): void
```

##### `resetIcebergSchema` <a name="resetIcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchema"></a>

```typescript
public resetIcebergSchema(): void
```

##### `resetIcebergSchemaV2` <a name="resetIcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchemaV2"></a>

```typescript
public resetIcebergSchemaV2(): void
```

##### `resetIcebergSortOrder` <a name="resetIcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSortOrder"></a>

```typescript
public resetIcebergSortOrder(): void
```

##### `resetTableProperties` <a name="resetTableProperties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetTableProperties"></a>

```typescript
public resetTableProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec">icebergPartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchema">icebergSchema</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference">S3TablesTableIcebergMetadataIcebergSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2">icebergSchemaV2</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder">icebergSortOrder</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference">S3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpecInput">icebergPartitionSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaInput">icebergSchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2Input">icebergSchemaV2Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrderInput">icebergSortOrderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tablePropertiesInput">tablePropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tableProperties">tableProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergPartitionSpec`<sup>Required</sup> <a name="icebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec"></a>

```typescript
public readonly icebergPartitionSpec: S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a>

---

##### `icebergSchema`<sup>Required</sup> <a name="icebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchema"></a>

```typescript
public readonly icebergSchema: S3TablesTableIcebergMetadataIcebergSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference">S3TablesTableIcebergMetadataIcebergSchemaOutputReference</a>

---

##### `icebergSchemaV2`<sup>Required</sup> <a name="icebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2"></a>

```typescript
public readonly icebergSchemaV2: S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a>

---

##### `icebergSortOrder`<sup>Required</sup> <a name="icebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder"></a>

```typescript
public readonly icebergSortOrder: S3TablesTableIcebergMetadataIcebergSortOrderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference">S3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a>

---

##### `icebergPartitionSpecInput`<sup>Optional</sup> <a name="icebergPartitionSpecInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpecInput"></a>

```typescript
public readonly icebergPartitionSpecInput: IResolvable | S3TablesTableIcebergMetadataIcebergPartitionSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

---

##### `icebergSchemaInput`<sup>Optional</sup> <a name="icebergSchemaInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaInput"></a>

```typescript
public readonly icebergSchemaInput: IResolvable | S3TablesTableIcebergMetadataIcebergSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

---

##### `icebergSchemaV2Input`<sup>Optional</sup> <a name="icebergSchemaV2Input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2Input"></a>

```typescript
public readonly icebergSchemaV2Input: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaV2;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

---

##### `icebergSortOrderInput`<sup>Optional</sup> <a name="icebergSortOrderInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrderInput"></a>

```typescript
public readonly icebergSortOrderInput: IResolvable | S3TablesTableIcebergMetadataIcebergSortOrder;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

---

##### `tablePropertiesInput`<sup>Optional</sup> <a name="tablePropertiesInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tablePropertiesInput"></a>

```typescript
public readonly tablePropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tableProperties`<sup>Required</sup> <a name="tableProperties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tableProperties"></a>

```typescript
public readonly tableProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableIcebergMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

---


### S3TablesTableSnapshotManagementOutputReference <a name="S3TablesTableSnapshotManagementOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableSnapshotManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMaxSnapshotAgeHours">resetMaxSnapshotAgeHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMinSnapshotsToKeep">resetMinSnapshotsToKeep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxSnapshotAgeHours` <a name="resetMaxSnapshotAgeHours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMaxSnapshotAgeHours"></a>

```typescript
public resetMaxSnapshotAgeHours(): void
```

##### `resetMinSnapshotsToKeep` <a name="resetMinSnapshotsToKeep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMinSnapshotsToKeep"></a>

```typescript
public resetMinSnapshotsToKeep(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHoursInput">maxSnapshotAgeHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeepInput">minSnapshotsToKeepInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours">maxSnapshotAgeHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep">minSnapshotsToKeep</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxSnapshotAgeHoursInput`<sup>Optional</sup> <a name="maxSnapshotAgeHoursInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHoursInput"></a>

```typescript
public readonly maxSnapshotAgeHoursInput: number;
```

- *Type:* number

---

##### `minSnapshotsToKeepInput`<sup>Optional</sup> <a name="minSnapshotsToKeepInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeepInput"></a>

```typescript
public readonly minSnapshotsToKeepInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `maxSnapshotAgeHours`<sup>Required</sup> <a name="maxSnapshotAgeHours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours"></a>

```typescript
public readonly maxSnapshotAgeHours: number;
```

- *Type:* number

---

##### `minSnapshotsToKeep`<sup>Required</sup> <a name="minSnapshotsToKeep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep"></a>

```typescript
public readonly minSnapshotsToKeep: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableSnapshotManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

---


### S3TablesTableStorageClassConfigurationOutputReference <a name="S3TablesTableStorageClassConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableStorageClassConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

---


### S3TablesTableTagsList <a name="S3TablesTableTagsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get"></a>

```typescript
public get(index: number): S3TablesTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]

---


### S3TablesTableTagsOutputReference <a name="S3TablesTableTagsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer"></a>

```typescript
import { s3TablesTable } from '@cdktn/provider-awscc'

new s3TablesTable.S3TablesTableTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>

---



