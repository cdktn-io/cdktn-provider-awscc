# `dataAwsccTimestreamTable` Submodule <a name="`dataAwsccTimestreamTable` Submodule" id="@cdktn/provider-awscc.dataAwsccTimestreamTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTimestreamTable <a name="DataAwsccTimestreamTable" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/timestream_table awscc_timestream_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.NewDataAwsccTimestreamTable(scope Construct, id *string, config DataAwsccTimestreamTableConfig) DataAwsccTimestreamTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig">DataAwsccTimestreamTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig">DataAwsccTimestreamTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTimestreamTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.DataAwsccTimestreamTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.DataAwsccTimestreamTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.DataAwsccTimestreamTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.DataAwsccTimestreamTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccTimestreamTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccTimestreamTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccTimestreamTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/timestream_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTimestreamTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.magneticStoreWriteProperties">MagneticStoreWriteProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.retentionProperties">RetentionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference">DataAwsccTimestreamTableRetentionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference">DataAwsccTimestreamTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList">DataAwsccTimestreamTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `MagneticStoreWriteProperties`<sup>Required</sup> <a name="MagneticStoreWriteProperties" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.magneticStoreWriteProperties"></a>

```go
func MagneticStoreWriteProperties() DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetentionProperties`<sup>Required</sup> <a name="RetentionProperties" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.retentionProperties"></a>

```go
func RetentionProperties() DataAwsccTimestreamTableRetentionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference">DataAwsccTimestreamTableRetentionPropertiesOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.schema"></a>

```go
func Schema() DataAwsccTimestreamTableSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference">DataAwsccTimestreamTableSchemaOutputReference</a>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tags"></a>

```go
func Tags() DataAwsccTimestreamTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList">DataAwsccTimestreamTableTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTimestreamTableConfig <a name="DataAwsccTimestreamTableConfig" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

&dataawscctimestreamtable.DataAwsccTimestreamTableConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/timestream_table#id DataAwsccTimestreamTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTimestreamTableMagneticStoreWriteProperties <a name="DataAwsccTimestreamTableMagneticStoreWriteProperties" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWriteProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWriteProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

&dataawscctimestreamtable.DataAwsccTimestreamTableMagneticStoreWriteProperties {

}
```


### DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation <a name="DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

&dataawscctimestreamtable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation {

}
```


### DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration <a name="DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

&dataawscctimestreamtable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration {

}
```


### DataAwsccTimestreamTableRetentionProperties <a name="DataAwsccTimestreamTableRetentionProperties" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

&dataawscctimestreamtable.DataAwsccTimestreamTableRetentionProperties {

}
```


### DataAwsccTimestreamTableSchema <a name="DataAwsccTimestreamTableSchema" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

&dataawscctimestreamtable.DataAwsccTimestreamTableSchema {

}
```


### DataAwsccTimestreamTableSchemaCompositePartitionKey <a name="DataAwsccTimestreamTableSchemaCompositePartitionKey" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

&dataawscctimestreamtable.DataAwsccTimestreamTableSchemaCompositePartitionKey {

}
```


### DataAwsccTimestreamTableTags <a name="DataAwsccTimestreamTableTags" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

&dataawscctimestreamtable.DataAwsccTimestreamTableTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference <a name="DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.NewDataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration"></a>

```go
func S3Configuration() DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

---


### DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference <a name="DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.NewDataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption">EncryptionOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix">ObjectKeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption"></a>

```go
func EncryptionOption() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `ObjectKeyPrefix`<sup>Required</sup> <a name="ObjectKeyPrefix" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix"></a>

```go
func ObjectKeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

---


### DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference <a name="DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.NewDataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites">EnableMagneticStoreWrites</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation">MagneticStoreRejectedDataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWriteProperties">DataAwsccTimestreamTableMagneticStoreWriteProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableMagneticStoreWrites`<sup>Required</sup> <a name="EnableMagneticStoreWrites" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites"></a>

```go
func EnableMagneticStoreWrites() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MagneticStoreRejectedDataLocation`<sup>Required</sup> <a name="MagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation"></a>

```go
func MagneticStoreRejectedDataLocation() DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamTableMagneticStoreWriteProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWriteProperties">DataAwsccTimestreamTableMagneticStoreWriteProperties</a>

---


### DataAwsccTimestreamTableRetentionPropertiesOutputReference <a name="DataAwsccTimestreamTableRetentionPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.NewDataAwsccTimestreamTableRetentionPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTimestreamTableRetentionPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays">MagneticStoreRetentionPeriodInDays</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours">MemoryStoreRetentionPeriodInHours</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionProperties">DataAwsccTimestreamTableRetentionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MagneticStoreRetentionPeriodInDays`<sup>Required</sup> <a name="MagneticStoreRetentionPeriodInDays" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays"></a>

```go
func MagneticStoreRetentionPeriodInDays() *string
```

- *Type:* *string

---

##### `MemoryStoreRetentionPeriodInHours`<sup>Required</sup> <a name="MemoryStoreRetentionPeriodInHours" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours"></a>

```go
func MemoryStoreRetentionPeriodInHours() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamTableRetentionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionProperties">DataAwsccTimestreamTableRetentionProperties</a>

---


### DataAwsccTimestreamTableSchemaCompositePartitionKeyList <a name="DataAwsccTimestreamTableSchemaCompositePartitionKeyList" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.NewDataAwsccTimestreamTableSchemaCompositePartitionKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccTimestreamTableSchemaCompositePartitionKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.get"></a>

```go
func Get(index *f64) DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference <a name="DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.NewDataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord">EnforcementInRecord</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKey">DataAwsccTimestreamTableSchemaCompositePartitionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforcementInRecord`<sup>Required</sup> <a name="EnforcementInRecord" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord"></a>

```go
func EnforcementInRecord() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamTableSchemaCompositePartitionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKey">DataAwsccTimestreamTableSchemaCompositePartitionKey</a>

---


### DataAwsccTimestreamTableSchemaOutputReference <a name="DataAwsccTimestreamTableSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.NewDataAwsccTimestreamTableSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTimestreamTableSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.compositePartitionKey">CompositePartitionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList">DataAwsccTimestreamTableSchemaCompositePartitionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchema">DataAwsccTimestreamTableSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompositePartitionKey`<sup>Required</sup> <a name="CompositePartitionKey" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.compositePartitionKey"></a>

```go
func CompositePartitionKey() DataAwsccTimestreamTableSchemaCompositePartitionKeyList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList">DataAwsccTimestreamTableSchemaCompositePartitionKeyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamTableSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchema">DataAwsccTimestreamTableSchema</a>

---


### DataAwsccTimestreamTableTagsList <a name="DataAwsccTimestreamTableTagsList" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.NewDataAwsccTimestreamTableTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccTimestreamTableTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.get"></a>

```go
func Get(index *f64) DataAwsccTimestreamTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccTimestreamTableTagsOutputReference <a name="DataAwsccTimestreamTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctimestreamtable"

dataawscctimestreamtable.NewDataAwsccTimestreamTableTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccTimestreamTableTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTags">DataAwsccTimestreamTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamTableTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTags">DataAwsccTimestreamTableTags</a>

---



