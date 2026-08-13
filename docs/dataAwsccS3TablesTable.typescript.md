# `dataAwsccS3TablesTable` Submodule <a name="`dataAwsccS3TablesTable` Submodule" id="@cdktn/provider-awscc.dataAwsccS3TablesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3TablesTable <a name="DataAwsccS3TablesTable" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3tables_table awscc_s3tables_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTable(scope: Construct, id: string, config: DataAwsccS3TablesTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig">DataAwsccS3TablesTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig">DataAwsccS3TablesTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3TablesTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isConstruct"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

dataAwsccS3TablesTable.DataAwsccS3TablesTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformElement"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformDataSource"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccS3TablesTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccS3TablesTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccS3TablesTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3tables_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3TablesTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.compaction">compaction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference">DataAwsccS3TablesTableCompactionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.icebergMetadata">icebergMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference">DataAwsccS3TablesTableIcebergMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.openTableFormat">openTableFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.snapshotManagement">snapshotManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference">DataAwsccS3TablesTableSnapshotManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.storageClassConfiguration">storageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference">DataAwsccS3TablesTableStorageClassConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableArn">tableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableBucketArn">tableBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList">DataAwsccS3TablesTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.versionToken">versionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.warehouseLocation">warehouseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.withoutMetadata">withoutMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `compaction`<sup>Required</sup> <a name="compaction" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.compaction"></a>

```typescript
public readonly compaction: DataAwsccS3TablesTableCompactionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference">DataAwsccS3TablesTableCompactionOutputReference</a>

---

##### `icebergMetadata`<sup>Required</sup> <a name="icebergMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.icebergMetadata"></a>

```typescript
public readonly icebergMetadata: DataAwsccS3TablesTableIcebergMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference">DataAwsccS3TablesTableIcebergMetadataOutputReference</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `openTableFormat`<sup>Required</sup> <a name="openTableFormat" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.openTableFormat"></a>

```typescript
public readonly openTableFormat: string;
```

- *Type:* string

---

##### `snapshotManagement`<sup>Required</sup> <a name="snapshotManagement" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.snapshotManagement"></a>

```typescript
public readonly snapshotManagement: DataAwsccS3TablesTableSnapshotManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference">DataAwsccS3TablesTableSnapshotManagementOutputReference</a>

---

##### `storageClassConfiguration`<sup>Required</sup> <a name="storageClassConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.storageClassConfiguration"></a>

```typescript
public readonly storageClassConfiguration: DataAwsccS3TablesTableStorageClassConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference">DataAwsccS3TablesTableStorageClassConfigurationOutputReference</a>

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableArn"></a>

```typescript
public readonly tableArn: string;
```

- *Type:* string

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableBucketArn"></a>

```typescript
public readonly tableBucketArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tags"></a>

```typescript
public readonly tags: DataAwsccS3TablesTableTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList">DataAwsccS3TablesTableTagsList</a>

---

##### `versionToken`<sup>Required</sup> <a name="versionToken" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.versionToken"></a>

```typescript
public readonly versionToken: string;
```

- *Type:* string

---

##### `warehouseLocation`<sup>Required</sup> <a name="warehouseLocation" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.warehouseLocation"></a>

```typescript
public readonly warehouseLocation: string;
```

- *Type:* string

---

##### `withoutMetadata`<sup>Required</sup> <a name="withoutMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.withoutMetadata"></a>

```typescript
public readonly withoutMetadata: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3TablesTableCompaction <a name="DataAwsccS3TablesTableCompaction" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompaction.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableCompaction: dataAwsccS3TablesTable.DataAwsccS3TablesTableCompaction = { ... }
```


### DataAwsccS3TablesTableConfig <a name="DataAwsccS3TablesTableConfig" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableConfig: dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3tables_table#id DataAwsccS3TablesTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3TablesTableIcebergMetadata <a name="DataAwsccS3TablesTableIcebergMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadata.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableIcebergMetadata: dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadata = { ... }
```


### DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec <a name="DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec: dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec = { ... }
```


### DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields <a name="DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields: dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields = { ... }
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSchema <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchema" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchema.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableIcebergMetadataIcebergSchema: dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchema = { ... }
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct: dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct = { ... }
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2 <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2: dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2 = { ... }
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct: dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct = { ... }
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableIcebergMetadataIcebergSortOrder: dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder = { ... }
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields: dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields = { ... }
```


### DataAwsccS3TablesTableSnapshotManagement <a name="DataAwsccS3TablesTableSnapshotManagement" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagement.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableSnapshotManagement: dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagement = { ... }
```


### DataAwsccS3TablesTableStorageClassConfiguration <a name="DataAwsccS3TablesTableStorageClassConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfiguration.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableStorageClassConfiguration: dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfiguration = { ... }
```


### DataAwsccS3TablesTableTags <a name="DataAwsccS3TablesTableTags" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTags.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableTags: dataAwsccS3TablesTable.DataAwsccS3TablesTableTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3TablesTableCompactionOutputReference <a name="DataAwsccS3TablesTableCompactionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.targetFileSizeMb">targetFileSizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompaction">DataAwsccS3TablesTableCompaction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `targetFileSizeMb`<sup>Required</sup> <a name="targetFileSizeMb" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.targetFileSizeMb"></a>

```typescript
public readonly targetFileSizeMb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableCompaction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompaction">DataAwsccS3TablesTableCompaction</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList <a name="DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get"></a>

```typescript
public get(index: number): DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId"></a>

```typescript
public readonly fieldId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId">specId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields"></a>

```typescript
public readonly fields: DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a>

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId"></a>

```typescript
public readonly specId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList">schemaFieldList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchema">DataAwsccS3TablesTableIcebergMetadataIcebergSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaFieldList`<sup>Required</sup> <a name="schemaFieldList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList"></a>

```typescript
public readonly schemaFieldList: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableIcebergMetadataIcebergSchema;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchema">DataAwsccS3TablesTableIcebergMetadataIcebergSchema</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get"></a>

```typescript
public get(index: number): DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required"></a>

```typescript
public readonly required: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds">identifierFieldIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId">schemaId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList">schemaV2FieldList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType">schemaV2FieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierFieldIds`<sup>Required</sup> <a name="identifierFieldIds" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds"></a>

```typescript
public readonly identifierFieldIds: number[];
```

- *Type:* number[]

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: number;
```

- *Type:* number

---

##### `schemaV2FieldList`<sup>Required</sup> <a name="schemaV2FieldList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList"></a>

```typescript
public readonly schemaV2FieldList: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a>

---

##### `schemaV2FieldType`<sup>Required</sup> <a name="schemaV2FieldType" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType"></a>

```typescript
public readonly schemaV2FieldType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get"></a>

```typescript
public get(index: number): DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc">doc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `doc`<sup>Required</sup> <a name="doc" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required"></a>

```typescript
public readonly required: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get"></a>

```typescript
public get(index: number): DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder">nullOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `nullOrder`<sup>Required</sup> <a name="nullOrder" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder"></a>

```typescript
public readonly nullOrder: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId">orderId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields"></a>

```typescript
public readonly fields: DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a>

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId"></a>

```typescript
public readonly orderId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder</a>

---


### DataAwsccS3TablesTableIcebergMetadataOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec">icebergPartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSchema">icebergSchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2">icebergSchemaV2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder">icebergSortOrder</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.tableProperties">tableProperties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadata">DataAwsccS3TablesTableIcebergMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergPartitionSpec`<sup>Required</sup> <a name="icebergPartitionSpec" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec"></a>

```typescript
public readonly icebergPartitionSpec: DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a>

---

##### `icebergSchema`<sup>Required</sup> <a name="icebergSchema" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSchema"></a>

```typescript
public readonly icebergSchema: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference</a>

---

##### `icebergSchemaV2`<sup>Required</sup> <a name="icebergSchemaV2" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2"></a>

```typescript
public readonly icebergSchemaV2: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a>

---

##### `icebergSortOrder`<sup>Required</sup> <a name="icebergSortOrder" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder"></a>

```typescript
public readonly icebergSortOrder: DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a>

---

##### `tableProperties`<sup>Required</sup> <a name="tableProperties" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.tableProperties"></a>

```typescript
public readonly tableProperties: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableIcebergMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadata">DataAwsccS3TablesTableIcebergMetadata</a>

---


### DataAwsccS3TablesTableSnapshotManagementOutputReference <a name="DataAwsccS3TablesTableSnapshotManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours">maxSnapshotAgeHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep">minSnapshotsToKeep</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagement">DataAwsccS3TablesTableSnapshotManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxSnapshotAgeHours`<sup>Required</sup> <a name="maxSnapshotAgeHours" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours"></a>

```typescript
public readonly maxSnapshotAgeHours: number;
```

- *Type:* number

---

##### `minSnapshotsToKeep`<sup>Required</sup> <a name="minSnapshotsToKeep" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep"></a>

```typescript
public readonly minSnapshotsToKeep: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableSnapshotManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagement">DataAwsccS3TablesTableSnapshotManagement</a>

---


### DataAwsccS3TablesTableStorageClassConfigurationOutputReference <a name="DataAwsccS3TablesTableStorageClassConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfiguration">DataAwsccS3TablesTableStorageClassConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableStorageClassConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfiguration">DataAwsccS3TablesTableStorageClassConfiguration</a>

---


### DataAwsccS3TablesTableTagsList <a name="DataAwsccS3TablesTableTagsList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.get"></a>

```typescript
public get(index: number): DataAwsccS3TablesTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3TablesTableTagsOutputReference <a name="DataAwsccS3TablesTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTable } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTags">DataAwsccS3TablesTableTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTags">DataAwsccS3TablesTableTags</a>

---



