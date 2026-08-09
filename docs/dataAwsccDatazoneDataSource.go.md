# `dataAwsccDatazoneDataSource` Submodule <a name="`dataAwsccDatazoneDataSource` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneDataSource <a name="DataAwsccDatazoneDataSource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_data_source awscc_datazone_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSource(scope Construct, id *string, config DataAwsccDatazoneDataSourceConfig) DataAwsccDatazoneDataSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig">DataAwsccDatazoneDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig">DataAwsccDatazoneDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.DataAwsccDatazoneDataSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.DataAwsccDatazoneDataSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.DataAwsccDatazoneDataSource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.DataAwsccDatazoneDataSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDatazoneDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDatazoneDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDatazoneDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.assetFormsInput">AssetFormsInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList">DataAwsccDatazoneDataSourceAssetFormsInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference">DataAwsccDatazoneDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.connectionIdentifier">ConnectionIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.enableSetting">EnableSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.lastRunAssetCount">LastRunAssetCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.lastRunAt">LastRunAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.lastRunStatus">LastRunStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.projectIdentifier">ProjectIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.publishOnImport">PublishOnImport</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.recommendation">Recommendation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference">DataAwsccDatazoneDataSourceRecommendationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference">DataAwsccDatazoneDataSourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AssetFormsInput`<sup>Required</sup> <a name="AssetFormsInput" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.assetFormsInput"></a>

```go
func AssetFormsInput() DataAwsccDatazoneDataSourceAssetFormsInputList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList">DataAwsccDatazoneDataSourceAssetFormsInputList</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.configuration"></a>

```go
func Configuration() DataAwsccDatazoneDataSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference">DataAwsccDatazoneDataSourceConfigurationOutputReference</a>

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `ConnectionIdentifier`<sup>Required</sup> <a name="ConnectionIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.connectionIdentifier"></a>

```go
func ConnectionIdentifier() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `EnableSetting`<sup>Required</sup> <a name="EnableSetting" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.enableSetting"></a>

```go
func EnableSetting() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.environmentIdentifier"></a>

```go
func EnvironmentIdentifier() *string
```

- *Type:* *string

---

##### `LastRunAssetCount`<sup>Required</sup> <a name="LastRunAssetCount" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.lastRunAssetCount"></a>

```go
func LastRunAssetCount() *f64
```

- *Type:* *f64

---

##### `LastRunAt`<sup>Required</sup> <a name="LastRunAt" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.lastRunAt"></a>

```go
func LastRunAt() *string
```

- *Type:* *string

---

##### `LastRunStatus`<sup>Required</sup> <a name="LastRunStatus" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.lastRunStatus"></a>

```go
func LastRunStatus() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.projectIdentifier"></a>

```go
func ProjectIdentifier() *string
```

- *Type:* *string

---

##### `PublishOnImport`<sup>Required</sup> <a name="PublishOnImport" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.publishOnImport"></a>

```go
func PublishOnImport() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.recommendation"></a>

```go
func Recommendation() DataAwsccDatazoneDataSourceRecommendationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference">DataAwsccDatazoneDataSourceRecommendationOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.schedule"></a>

```go
func Schedule() DataAwsccDatazoneDataSourceScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference">DataAwsccDatazoneDataSourceScheduleOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneDataSourceAssetFormsInput <a name="DataAwsccDatazoneDataSourceAssetFormsInput" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceAssetFormsInput {

}
```


### DataAwsccDatazoneDataSourceConfig <a name="DataAwsccDatazoneDataSourceConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_data_source#id DataAwsccDatazoneDataSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneDataSourceConfiguration <a name="DataAwsccDatazoneDataSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfiguration {

}
```


### DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration <a name="DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration {

}
```


### DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations <a name="DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations {

}
```


### DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions <a name="DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions {

}
```


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration {

}
```


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration {

}
```


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage {

}
```


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource {

}
```


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource {

}
```


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations {

}
```


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions {

}
```


### DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration <a name="DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration {

}
```


### DataAwsccDatazoneDataSourceRecommendation <a name="DataAwsccDatazoneDataSourceRecommendation" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceRecommendation {

}
```


### DataAwsccDatazoneDataSourceSchedule <a name="DataAwsccDatazoneDataSourceSchedule" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

&dataawsccdatazonedatasource.DataAwsccDatazoneDataSourceSchedule {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneDataSourceAssetFormsInputList <a name="DataAwsccDatazoneDataSourceAssetFormsInputList" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceAssetFormsInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneDataSourceAssetFormsInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneDataSourceAssetFormsInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneDataSourceAssetFormsInputOutputReference <a name="DataAwsccDatazoneDataSourceAssetFormsInputOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceAssetFormsInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneDataSourceAssetFormsInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.formName">FormName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifier">TypeIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.typeRevision">TypeRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInput">DataAwsccDatazoneDataSourceAssetFormsInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `FormName`<sup>Required</sup> <a name="FormName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.formName"></a>

```go
func FormName() *string
```

- *Type:* *string

---

##### `TypeIdentifier`<sup>Required</sup> <a name="TypeIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifier"></a>

```go
func TypeIdentifier() *string
```

- *Type:* *string

---

##### `TypeRevision`<sup>Required</sup> <a name="TypeRevision" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.typeRevision"></a>

```go
func TypeRevision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceAssetFormsInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceAssetFormsInput">DataAwsccDatazoneDataSourceAssetFormsInput</a>

---


### DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResult">AutoImportDataQualityResult</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRole">DataAccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurations">RelationalFilterConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList">DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration">DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoImportDataQualityResult`<sup>Required</sup> <a name="AutoImportDataQualityResult" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResult"></a>

```go
func AutoImportDataQualityResult() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `DataAccessRole`<sup>Required</sup> <a name="DataAccessRole" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRole"></a>

```go
func DataAccessRole() *string
```

- *Type:* *string

---

##### `RelationalFilterConfigurations`<sup>Required</sup> <a name="RelationalFilterConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurations"></a>

```go
func RelationalFilterConfigurations() DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList">DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration">DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration</a>

---


### DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList <a name="DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>

---


### DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList <a name="DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions">FilterExpressions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `FilterExpressions`<sup>Required</sup> <a name="FilterExpressions" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions"></a>

```go
func FilterExpressions() DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>

---


### DataAwsccDatazoneDataSourceConfigurationOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneDataSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.glueRunConfiguration">GlueRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference">DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfiguration">RedshiftRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfiguration">SageMakerRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference">DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfiguration">DataAwsccDatazoneDataSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlueRunConfiguration`<sup>Required</sup> <a name="GlueRunConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.glueRunConfiguration"></a>

```go
func GlueRunConfiguration() DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference">DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference</a>

---

##### `RedshiftRunConfiguration`<sup>Required</sup> <a name="RedshiftRunConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfiguration"></a>

```go
func RedshiftRunConfiguration() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference</a>

---

##### `SageMakerRunConfiguration`<sup>Required</sup> <a name="SageMakerRunConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfiguration"></a>

```go
func SageMakerRunConfiguration() DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference">DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfiguration">DataAwsccDatazoneDataSourceConfiguration</a>

---


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRole">DataAccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfiguration">RedshiftCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorage">RedshiftStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurations">RelationalFilterConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataAccessRole`<sup>Required</sup> <a name="DataAccessRole" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRole"></a>

```go
func DataAccessRole() *string
```

- *Type:* *string

---

##### `RedshiftCredentialConfiguration`<sup>Required</sup> <a name="RedshiftCredentialConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfiguration"></a>

```go
func RedshiftCredentialConfiguration() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference</a>

---

##### `RedshiftStorage`<sup>Required</sup> <a name="RedshiftStorage" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorage"></a>

```go
func RedshiftStorage() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference</a>

---

##### `RelationalFilterConfigurations`<sup>Required</sup> <a name="RelationalFilterConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurations"></a>

```go
func RelationalFilterConfigurations() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

---


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArn">SecretManagerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretManagerArn`<sup>Required</sup> <a name="SecretManagerArn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArn"></a>

```go
func SecretManagerArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

---


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSource">RedshiftClusterSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSource">RedshiftServerlessSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedshiftClusterSource`<sup>Required</sup> <a name="RedshiftClusterSource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSource"></a>

```go
func RedshiftClusterSource() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference</a>

---

##### `RedshiftServerlessSource`<sup>Required</sup> <a name="RedshiftServerlessSource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSource"></a>

```go
func RedshiftServerlessSource() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

---


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

---


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupName"></a>

```go
func WorkgroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

---


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>

---


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions">FilterExpressions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `FilterExpressions`<sup>Required</sup> <a name="FilterExpressions" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions"></a>

```go
func FilterExpressions() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>

---


### DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference <a name="DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssets">TrackingAssets</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration">DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrackingAssets`<sup>Required</sup> <a name="TrackingAssets" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssets"></a>

```go
func TrackingAssets() StringListMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringListMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration">DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

---


### DataAwsccDatazoneDataSourceRecommendationOutputReference <a name="DataAwsccDatazoneDataSourceRecommendationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceRecommendationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneDataSourceRecommendationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGeneration">EnableBusinessNameGeneration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendation">DataAwsccDatazoneDataSourceRecommendation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableBusinessNameGeneration`<sup>Required</sup> <a name="EnableBusinessNameGeneration" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGeneration"></a>

```go
func EnableBusinessNameGeneration() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceRecommendation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceRecommendation">DataAwsccDatazoneDataSourceRecommendation</a>

---


### DataAwsccDatazoneDataSourceScheduleOutputReference <a name="DataAwsccDatazoneDataSourceScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazonedatasource"

dataawsccdatazonedatasource.NewDataAwsccDatazoneDataSourceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneDataSourceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceSchedule">DataAwsccDatazoneDataSourceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneDataSourceSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneDataSource.DataAwsccDatazoneDataSourceSchedule">DataAwsccDatazoneDataSourceSchedule</a>

---



