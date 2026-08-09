# `dataAwsccS3TablesTable` Submodule <a name="`dataAwsccS3TablesTable` Submodule" id="@cdktn/provider-awscc.dataAwsccS3TablesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3TablesTable <a name="DataAwsccS3TablesTable" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3tables_table awscc_s3tables_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTable(scope Construct, id *string, config DataAwsccS3TablesTableConfig) DataAwsccS3TablesTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig">DataAwsccS3TablesTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig">DataAwsccS3TablesTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3TablesTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.DataAwsccS3TablesTable_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.DataAwsccS3TablesTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.DataAwsccS3TablesTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.DataAwsccS3TablesTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccS3TablesTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccS3TablesTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccS3TablesTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3tables_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3TablesTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.compaction">Compaction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference">DataAwsccS3TablesTableCompactionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.icebergMetadata">IcebergMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference">DataAwsccS3TablesTableIcebergMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.openTableFormat">OpenTableFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.snapshotManagement">SnapshotManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference">DataAwsccS3TablesTableSnapshotManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.storageClassConfiguration">StorageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference">DataAwsccS3TablesTableStorageClassConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableArn">TableArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableBucketArn">TableBucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList">DataAwsccS3TablesTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.versionToken">VersionToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.warehouseLocation">WarehouseLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.withoutMetadata">WithoutMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Compaction`<sup>Required</sup> <a name="Compaction" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.compaction"></a>

```go
func Compaction() DataAwsccS3TablesTableCompactionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference">DataAwsccS3TablesTableCompactionOutputReference</a>

---

##### `IcebergMetadata`<sup>Required</sup> <a name="IcebergMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.icebergMetadata"></a>

```go
func IcebergMetadata() DataAwsccS3TablesTableIcebergMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference">DataAwsccS3TablesTableIcebergMetadataOutputReference</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OpenTableFormat`<sup>Required</sup> <a name="OpenTableFormat" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.openTableFormat"></a>

```go
func OpenTableFormat() *string
```

- *Type:* *string

---

##### `SnapshotManagement`<sup>Required</sup> <a name="SnapshotManagement" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.snapshotManagement"></a>

```go
func SnapshotManagement() DataAwsccS3TablesTableSnapshotManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference">DataAwsccS3TablesTableSnapshotManagementOutputReference</a>

---

##### `StorageClassConfiguration`<sup>Required</sup> <a name="StorageClassConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.storageClassConfiguration"></a>

```go
func StorageClassConfiguration() DataAwsccS3TablesTableStorageClassConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference">DataAwsccS3TablesTableStorageClassConfigurationOutputReference</a>

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableArn"></a>

```go
func TableArn() *string
```

- *Type:* *string

---

##### `TableBucketArn`<sup>Required</sup> <a name="TableBucketArn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableBucketArn"></a>

```go
func TableBucketArn() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tags"></a>

```go
func Tags() DataAwsccS3TablesTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList">DataAwsccS3TablesTableTagsList</a>

---

##### `VersionToken`<sup>Required</sup> <a name="VersionToken" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.versionToken"></a>

```go
func VersionToken() *string
```

- *Type:* *string

---

##### `WarehouseLocation`<sup>Required</sup> <a name="WarehouseLocation" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.warehouseLocation"></a>

```go
func WarehouseLocation() *string
```

- *Type:* *string

---

##### `WithoutMetadata`<sup>Required</sup> <a name="WithoutMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.withoutMetadata"></a>

```go
func WithoutMetadata() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3TablesTableCompaction <a name="DataAwsccS3TablesTableCompaction" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompaction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableCompaction {

}
```


### DataAwsccS3TablesTableConfig <a name="DataAwsccS3TablesTableConfig" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3tables_table#id DataAwsccS3TablesTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3TablesTableIcebergMetadata <a name="DataAwsccS3TablesTableIcebergMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableIcebergMetadata {

}
```


### DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec <a name="DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec {

}
```


### DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields <a name="DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields {

}
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSchema <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchema" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableIcebergMetadataIcebergSchema {

}
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct {

}
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2 <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2 {

}
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct {

}
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder {

}
```


### DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields {

}
```


### DataAwsccS3TablesTableSnapshotManagement <a name="DataAwsccS3TablesTableSnapshotManagement" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableSnapshotManagement {

}
```


### DataAwsccS3TablesTableStorageClassConfiguration <a name="DataAwsccS3TablesTableStorageClassConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableStorageClassConfiguration {

}
```


### DataAwsccS3TablesTableTags <a name="DataAwsccS3TablesTableTags" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

&dataawsccs3tablestable.DataAwsccS3TablesTableTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3TablesTableCompactionOutputReference <a name="DataAwsccS3TablesTableCompactionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableCompactionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableCompactionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.targetFileSizeMb">TargetFileSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompaction">DataAwsccS3TablesTableCompaction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TargetFileSizeMb`<sup>Required</sup> <a name="TargetFileSizeMb" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.targetFileSizeMb"></a>

```go
func TargetFileSizeMb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompactionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableCompaction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableCompaction">DataAwsccS3TablesTableCompaction</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList <a name="DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get"></a>

```go
func Get(index *f64) DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform">Transform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId"></a>

```go
func FieldId() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId"></a>

```go
func SourceId() *f64
```

- *Type:* *f64

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform"></a>

```go
func Transform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId">SpecId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields"></a>

```go
func Fields() DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a>

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId"></a>

```go
func SpecId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList">SchemaFieldList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchema">DataAwsccS3TablesTableIcebergMetadataIcebergSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaFieldList`<sup>Required</sup> <a name="SchemaFieldList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList"></a>

```go
func SchemaFieldList() DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableIcebergMetadataIcebergSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchema">DataAwsccS3TablesTableIcebergMetadataIcebergSchema</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get"></a>

```go
func Get(index *f64) DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required">Required</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required"></a>

```go
func Required() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds">IdentifierFieldIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId">SchemaId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList">SchemaV2FieldList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType">SchemaV2FieldType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierFieldIds`<sup>Required</sup> <a name="IdentifierFieldIds" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds"></a>

```go
func IdentifierFieldIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId"></a>

```go
func SchemaId() *f64
```

- *Type:* *f64

---

##### `SchemaV2FieldList`<sup>Required</sup> <a name="SchemaV2FieldList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList"></a>

```go
func SchemaV2FieldList() DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a>

---

##### `SchemaV2FieldType`<sup>Required</sup> <a name="SchemaV2FieldType" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType"></a>

```go
func SchemaV2FieldType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get"></a>

```go
func Get(index *f64) DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc">Doc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required">Required</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Doc`<sup>Required</sup> <a name="Doc" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc"></a>

```go
func Doc() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required"></a>

```go
func Required() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get"></a>

```go
func Get(index *f64) DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder">NullOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform">Transform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `NullOrder`<sup>Required</sup> <a name="NullOrder" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder"></a>

```go
func NullOrder() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId"></a>

```go
func SourceId() *f64
```

- *Type:* *f64

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform"></a>

```go
func Transform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields</a>

---


### DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId">OrderId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields"></a>

```go
func Fields() DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a>

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId"></a>

```go
func OrderId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder</a>

---


### DataAwsccS3TablesTableIcebergMetadataOutputReference <a name="DataAwsccS3TablesTableIcebergMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableIcebergMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableIcebergMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec">IcebergPartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSchema">IcebergSchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2">IcebergSchemaV2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder">IcebergSortOrder</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.tableProperties">TableProperties</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadata">DataAwsccS3TablesTableIcebergMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcebergPartitionSpec`<sup>Required</sup> <a name="IcebergPartitionSpec" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec"></a>

```go
func IcebergPartitionSpec() DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a>

---

##### `IcebergSchema`<sup>Required</sup> <a name="IcebergSchema" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSchema"></a>

```go
func IcebergSchema() DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference</a>

---

##### `IcebergSchemaV2`<sup>Required</sup> <a name="IcebergSchemaV2" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2"></a>

```go
func IcebergSchemaV2() DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a>

---

##### `IcebergSortOrder`<sup>Required</sup> <a name="IcebergSortOrder" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder"></a>

```go
func IcebergSortOrder() DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference">DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a>

---

##### `TableProperties`<sup>Required</sup> <a name="TableProperties" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.tableProperties"></a>

```go
func TableProperties() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableIcebergMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableIcebergMetadata">DataAwsccS3TablesTableIcebergMetadata</a>

---


### DataAwsccS3TablesTableSnapshotManagementOutputReference <a name="DataAwsccS3TablesTableSnapshotManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableSnapshotManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableSnapshotManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours">MaxSnapshotAgeHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep">MinSnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagement">DataAwsccS3TablesTableSnapshotManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxSnapshotAgeHours`<sup>Required</sup> <a name="MaxSnapshotAgeHours" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours"></a>

```go
func MaxSnapshotAgeHours() *f64
```

- *Type:* *f64

---

##### `MinSnapshotsToKeep`<sup>Required</sup> <a name="MinSnapshotsToKeep" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep"></a>

```go
func MinSnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableSnapshotManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableSnapshotManagement">DataAwsccS3TablesTableSnapshotManagement</a>

---


### DataAwsccS3TablesTableStorageClassConfigurationOutputReference <a name="DataAwsccS3TablesTableStorageClassConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableStorageClassConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableStorageClassConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfiguration">DataAwsccS3TablesTableStorageClassConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableStorageClassConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableStorageClassConfiguration">DataAwsccS3TablesTableStorageClassConfiguration</a>

---


### DataAwsccS3TablesTableTagsList <a name="DataAwsccS3TablesTableTagsList" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3TablesTableTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.get"></a>

```go
func Get(index *f64) DataAwsccS3TablesTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3TablesTableTagsOutputReference <a name="DataAwsccS3TablesTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestable"

dataawsccs3tablestable.NewDataAwsccS3TablesTableTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3TablesTableTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTags">DataAwsccS3TablesTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTable.DataAwsccS3TablesTableTags">DataAwsccS3TablesTableTags</a>

---



