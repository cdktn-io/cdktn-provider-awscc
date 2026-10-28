# `dataAwsccGlueTable` Submodule <a name="`dataAwsccGlueTable` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueTable <a name="DataAwsccGlueTable" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/glue_table awscc_glue_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTable(scope Construct, id *string, config DataAwsccGlueTableConfig) DataAwsccGlueTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig">DataAwsccGlueTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig">DataAwsccGlueTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.DataAwsccGlueTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.DataAwsccGlueTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.DataAwsccGlueTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.DataAwsccGlueTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGlueTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGlueTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGlueTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/glue_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.openTableFormatInput">OpenTableFormatInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference">DataAwsccGlueTableOpenTableFormatInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.tableInput">TableInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference">DataAwsccGlueTableTableInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpenTableFormatInput`<sup>Required</sup> <a name="OpenTableFormatInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.openTableFormatInput"></a>

```go
func OpenTableFormatInput() DataAwsccGlueTableOpenTableFormatInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference">DataAwsccGlueTableOpenTableFormatInputOutputReference</a>

---

##### `TableInput`<sup>Required</sup> <a name="TableInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.tableInput"></a>

```go
func TableInput() DataAwsccGlueTableTableInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference">DataAwsccGlueTableTableInputOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueTableConfig <a name="DataAwsccGlueTableConfig" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/glue_table#id DataAwsccGlueTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueTableOpenTableFormatInput <a name="DataAwsccGlueTableOpenTableFormatInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableOpenTableFormatInput {

}
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInput <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableOpenTableFormatInputIcebergInput {

}
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput {

}
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec {

}
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields {

}
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema {

}
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields {

}
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder {

}
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields {

}
```


### DataAwsccGlueTableTableInput <a name="DataAwsccGlueTableTableInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInput {

}
```


### DataAwsccGlueTableTableInputPartitionKeys <a name="DataAwsccGlueTableTableInputPartitionKeys" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInputPartitionKeys {

}
```


### DataAwsccGlueTableTableInputStorageDescriptor <a name="DataAwsccGlueTableTableInputStorageDescriptor" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInputStorageDescriptor {

}
```


### DataAwsccGlueTableTableInputStorageDescriptorColumns <a name="DataAwsccGlueTableTableInputStorageDescriptorColumns" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInputStorageDescriptorColumns {

}
```


### DataAwsccGlueTableTableInputStorageDescriptorSchemaReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSchemaReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReference {

}
```


### DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId <a name="DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId {

}
```


### DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo <a name="DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo {

}
```


### DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo <a name="DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo {

}
```


### DataAwsccGlueTableTableInputStorageDescriptorSortColumns <a name="DataAwsccGlueTableTableInputStorageDescriptorSortColumns" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInputStorageDescriptorSortColumns {

}
```


### DataAwsccGlueTableTableInputTargetTable <a name="DataAwsccGlueTableTableInputTargetTable" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInputTargetTable {

}
```


### DataAwsccGlueTableTableInputViewDefinition <a name="DataAwsccGlueTableTableInputViewDefinition" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInputViewDefinition {

}
```


### DataAwsccGlueTableTableInputViewDefinitionRepresentations <a name="DataAwsccGlueTableTableInputViewDefinitionRepresentations" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

&dataawsccgluetable.DataAwsccGlueTableTableInputViewDefinitionRepresentations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpec">PartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.properties">Properties</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrder">WriteOrder</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PartitionSpec`<sup>Required</sup> <a name="PartitionSpec" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpec"></a>

```go
func PartitionSpec() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.properties"></a>

```go
func Properties() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schema"></a>

```go
func Schema() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference</a>

---

##### `WriteOrder`<sup>Required</sup> <a name="WriteOrder" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrder"></a>

```go
func WriteOrder() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get"></a>

```go
func Get(index *f64) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transform">Transform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldId"></a>

```go
func FieldId() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceId"></a>

```go
func SourceId() *f64
```

- *Type:* *f64

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transform"></a>

```go
func Transform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specId">SpecId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fields"></a>

```go
func Fields() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList</a>

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specId"></a>

```go
func SpecId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get"></a>

```go
func Get(index *f64) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.doc">Doc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.required">Required</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Doc`<sup>Required</sup> <a name="Doc" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.doc"></a>

```go
func Doc() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.required"></a>

```go
func Required() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIds">IdentifierFieldIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaId">SchemaId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fields"></a>

```go
func Fields() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList</a>

---

##### `IdentifierFieldIds`<sup>Required</sup> <a name="IdentifierFieldIds" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIds"></a>

```go
func IdentifierFieldIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaId"></a>

```go
func SchemaId() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get"></a>

```go
func Get(index *f64) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrder">NullOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transform">Transform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `NullOrder`<sup>Required</sup> <a name="NullOrder" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrder"></a>

```go
func NullOrder() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceId"></a>

```go
func SourceId() *f64
```

- *Type:* *f64

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transform"></a>

```go
func Transform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderId">OrderId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fields"></a>

```go
func Fields() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList</a>

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderId"></a>

```go
func OrderId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInput">IcebergTableInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation">MetadataOperation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInput">DataAwsccGlueTableOpenTableFormatInputIcebergInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcebergTableInput`<sup>Required</sup> <a name="IcebergTableInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInput"></a>

```go
func IcebergTableInput() DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference</a>

---

##### `MetadataOperation`<sup>Required</sup> <a name="MetadataOperation" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation"></a>

```go
func MetadataOperation() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOpenTableFormatInputIcebergInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInput">DataAwsccGlueTableOpenTableFormatInputIcebergInput</a>

---


### DataAwsccGlueTableOpenTableFormatInputOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableOpenTableFormatInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOpenTableFormatInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.icebergInput">IcebergInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInput">DataAwsccGlueTableOpenTableFormatInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcebergInput`<sup>Required</sup> <a name="IcebergInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.icebergInput"></a>

```go
func IcebergInput() DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOpenTableFormatInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInput">DataAwsccGlueTableOpenTableFormatInput</a>

---


### DataAwsccGlueTableTableInputOutputReference <a name="DataAwsccGlueTableTableInputOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableTableInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.partitionKeys">PartitionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList">DataAwsccGlueTableTableInputPartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.retention">Retention</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference">DataAwsccGlueTableTableInputStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.tableType">TableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference">DataAwsccGlueTableTableInputTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewDefinition">ViewDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference">DataAwsccGlueTableTableInputViewDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewExpandedText">ViewExpandedText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewOriginalText">ViewOriginalText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInput">DataAwsccGlueTableTableInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `PartitionKeys`<sup>Required</sup> <a name="PartitionKeys" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.partitionKeys"></a>

```go
func PartitionKeys() DataAwsccGlueTableTableInputPartitionKeysList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList">DataAwsccGlueTableTableInputPartitionKeysList</a>

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.retention"></a>

```go
func Retention() *f64
```

- *Type:* *f64

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.storageDescriptor"></a>

```go
func StorageDescriptor() DataAwsccGlueTableTableInputStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference">DataAwsccGlueTableTableInputStorageDescriptorOutputReference</a>

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.tableType"></a>

```go
func TableType() *string
```

- *Type:* *string

---

##### `TargetTable`<sup>Required</sup> <a name="TargetTable" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.targetTable"></a>

```go
func TargetTable() DataAwsccGlueTableTableInputTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference">DataAwsccGlueTableTableInputTargetTableOutputReference</a>

---

##### `ViewDefinition`<sup>Required</sup> <a name="ViewDefinition" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewDefinition"></a>

```go
func ViewDefinition() DataAwsccGlueTableTableInputViewDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference">DataAwsccGlueTableTableInputViewDefinitionOutputReference</a>

---

##### `ViewExpandedText`<sup>Required</sup> <a name="ViewExpandedText" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewExpandedText"></a>

```go
func ViewExpandedText() *string
```

- *Type:* *string

---

##### `ViewOriginalText`<sup>Required</sup> <a name="ViewOriginalText" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewOriginalText"></a>

```go
func ViewOriginalText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInput">DataAwsccGlueTableTableInput</a>

---


### DataAwsccGlueTableTableInputPartitionKeysList <a name="DataAwsccGlueTableTableInputPartitionKeysList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputPartitionKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGlueTableTableInputPartitionKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.get"></a>

```go
func Get(index *f64) DataAwsccGlueTableTableInputPartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGlueTableTableInputPartitionKeysOutputReference <a name="DataAwsccGlueTableTableInputPartitionKeysOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputPartitionKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGlueTableTableInputPartitionKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeys">DataAwsccGlueTableTableInputPartitionKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInputPartitionKeys
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeys">DataAwsccGlueTableTableInputPartitionKeys</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorColumnsList <a name="DataAwsccGlueTableTableInputStorageDescriptorColumnsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputStorageDescriptorColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGlueTableTableInputStorageDescriptorColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.get"></a>

```go
func Get(index *f64) DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumns">DataAwsccGlueTableTableInputStorageDescriptorColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInputStorageDescriptorColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumns">DataAwsccGlueTableTableInputStorageDescriptorColumns</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputStorageDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableTableInputStorageDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.bucketColumns">BucketColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList">DataAwsccGlueTableTableInputStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.compressed">Compressed</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.numberOfBuckets">NumberOfBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.schemaReference">SchemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.sortColumns">SortColumns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList">DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectories">StoredAsSubDirectories</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptor">DataAwsccGlueTableTableInputStorageDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketColumns`<sup>Required</sup> <a name="BucketColumns" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.bucketColumns"></a>

```go
func BucketColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.columns"></a>

```go
func Columns() DataAwsccGlueTableTableInputStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList">DataAwsccGlueTableTableInputStorageDescriptorColumnsList</a>

---

##### `Compressed`<sup>Required</sup> <a name="Compressed" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.compressed"></a>

```go
func Compressed() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.inputFormat"></a>

```go
func InputFormat() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NumberOfBuckets`<sup>Required</sup> <a name="NumberOfBuckets" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```go
func NumberOfBuckets() *f64
```

- *Type:* *f64

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `SchemaReference`<sup>Required</sup> <a name="SchemaReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.schemaReference"></a>

```go
func SchemaReference() DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `SerdeInfo`<sup>Required</sup> <a name="SerdeInfo" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.serdeInfo"></a>

```go
func SerdeInfo() DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference</a>

---

##### `SkewedInfo`<sup>Required</sup> <a name="SkewedInfo" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.skewedInfo"></a>

```go
func SkewedInfo() DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference</a>

---

##### `SortColumns`<sup>Required</sup> <a name="SortColumns" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.sortColumns"></a>

```go
func SortColumns() DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList">DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList</a>

---

##### `StoredAsSubDirectories`<sup>Required</sup> <a name="StoredAsSubDirectories" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```go
func StoredAsSubDirectories() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInputStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptor">DataAwsccGlueTableTableInputStorageDescriptor</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId">SchemaId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">SchemaVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">SchemaVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```go
func SchemaId() DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `SchemaVersionId`<sup>Required</sup> <a name="SchemaVersionId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```go
func SchemaVersionId() *string
```

- *Type:* *string

---

##### `SchemaVersionNumber`<sup>Required</sup> <a name="SchemaVersionNumber" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```go
func SchemaVersionNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInputStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReference</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">RegistryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```go
func RegistryName() *string
```

- *Type:* *string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```go
func SchemaArn() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">SerializationLibrary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo">DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `SerializationLibrary`<sup>Required</sup> <a name="SerializationLibrary" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```go
func SerializationLibrary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo">DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">SkewedColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">SkewedColumnValueLocationMaps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">SkewedColumnValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo">DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SkewedColumnNames`<sup>Required</sup> <a name="SkewedColumnNames" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```go
func SkewedColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `SkewedColumnValueLocationMaps`<sup>Required</sup> <a name="SkewedColumnValueLocationMaps" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```go
func SkewedColumnValueLocationMaps() *string
```

- *Type:* *string

---

##### `SkewedColumnValues`<sup>Required</sup> <a name="SkewedColumnValues" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```go
func SkewedColumnValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo">DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList <a name="DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputStorageDescriptorSortColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.get"></a>

```go
func Get(index *f64) DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrder">SortOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumns">DataAwsccGlueTableTableInputStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```go
func SortOrder() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInputStorageDescriptorSortColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumns">DataAwsccGlueTableTableInputStorageDescriptorSortColumns</a>

---


### DataAwsccGlueTableTableInputTargetTableOutputReference <a name="DataAwsccGlueTableTableInputTargetTableOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputTargetTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableTableInputTargetTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTable">DataAwsccGlueTableTableInputTargetTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInputTargetTable
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTable">DataAwsccGlueTableTableInputTargetTable</a>

---


### DataAwsccGlueTableTableInputViewDefinitionOutputReference <a name="DataAwsccGlueTableTableInputViewDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputViewDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableTableInputViewDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.definer">Definer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.isProtected">IsProtected</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.representations">Representations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList">DataAwsccGlueTableTableInputViewDefinitionRepresentationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.subObjects">SubObjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinition">DataAwsccGlueTableTableInputViewDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Definer`<sup>Required</sup> <a name="Definer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.definer"></a>

```go
func Definer() *string
```

- *Type:* *string

---

##### `IsProtected`<sup>Required</sup> <a name="IsProtected" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.isProtected"></a>

```go
func IsProtected() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Representations`<sup>Required</sup> <a name="Representations" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.representations"></a>

```go
func Representations() DataAwsccGlueTableTableInputViewDefinitionRepresentationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList">DataAwsccGlueTableTableInputViewDefinitionRepresentationsList</a>

---

##### `SubObjects`<sup>Required</sup> <a name="SubObjects" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.subObjects"></a>

```go
func SubObjects() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInputViewDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinition">DataAwsccGlueTableTableInputViewDefinition</a>

---


### DataAwsccGlueTableTableInputViewDefinitionRepresentationsList <a name="DataAwsccGlueTableTableInputViewDefinitionRepresentationsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputViewDefinitionRepresentationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGlueTableTableInputViewDefinitionRepresentationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.get"></a>

```go
func Get(index *f64) DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference <a name="DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccgluetable"

dataawsccgluetable.NewDataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialect">Dialect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersion">DialectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnection">ValidationConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedText">ViewExpandedText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalText">ViewOriginalText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentations">DataAwsccGlueTableTableInputViewDefinitionRepresentations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dialect`<sup>Required</sup> <a name="Dialect" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialect"></a>

```go
func Dialect() *string
```

- *Type:* *string

---

##### `DialectVersion`<sup>Required</sup> <a name="DialectVersion" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersion"></a>

```go
func DialectVersion() *string
```

- *Type:* *string

---

##### `ValidationConnection`<sup>Required</sup> <a name="ValidationConnection" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnection"></a>

```go
func ValidationConnection() *string
```

- *Type:* *string

---

##### `ViewExpandedText`<sup>Required</sup> <a name="ViewExpandedText" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedText"></a>

```go
func ViewExpandedText() *string
```

- *Type:* *string

---

##### `ViewOriginalText`<sup>Required</sup> <a name="ViewOriginalText" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalText"></a>

```go
func ViewOriginalText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableTableInputViewDefinitionRepresentations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentations">DataAwsccGlueTableTableInputViewDefinitionRepresentations</a>

---



